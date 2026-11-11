/**
 * Shopify Storefront API GraphQL Client for BlueFin
 */

const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '';
const STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';
const API_VERSION = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2024-04';

export async function shopifyFetch<T>({
  query,
  variables = {}
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T | null> {
  if (!SHOPIFY_DOMAIN || !STOREFRONT_ACCESS_TOKEN) {
    console.warn('[Shopify] Storefront API credentials missing in environment variables.');
    return null;
  }

  const endpoint = `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      cache: 'no-store'
    });

    const json = await res.json();
    if (json.errors) {
      console.error('[Shopify GraphQL Error]:', json.errors);
      throw new Error(json.errors[0]?.message || 'Shopify GraphQL Error');
    }

    return json.data as T;
  } catch (error) {
    console.error('[Shopify Fetch Failed]:', error);
    return null;
  }
}

// ----------------------------------------------------
// GraphQL Queries & Mutations
// ----------------------------------------------------

export const CREATE_CART_MUTATION = /* GraphQL */ `
  mutation CartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
        lines(first: 20) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    featuredImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const ADD_TO_CART_MUTATION = /* GraphQL */ `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        lines(first: 20) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const GET_PRODUCTS_QUERY = /* GraphQL */ `
  query GetProducts($first: Int = 10) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          variants(first: 5) {
            edges {
              node {
                id
                title
                availableForSale
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetches all products with images, prices, and variant IDs from Shopify
 */
export async function getShopifyProducts() {
  const data = await shopifyFetch<{
    products: {
      edges: {
        node: {
          id: string;
          title: string;
          handle: string;
          featuredImage?: { url: string; altText?: string } | null;
          images?: { edges: { node: { url: string; altText?: string } }[] };
          variants?: {
            edges: {
              node: {
                id: string;
                title: string;
                price: { amount: string; currencyCode: string };
              };
            }[];
          };
        };
      }[];
    };
  }>({
    query: GET_PRODUCTS_QUERY,
    variables: { first: 10 }
  });

  return (
    data?.products?.edges.map(e => {
      const p = e.node;
      const imageUrl =
        p.featuredImage?.url ||
        p.images?.edges?.[0]?.node?.url ||
        null;
      const variant = p.variants?.edges?.[0]?.node;

      return {
        id: p.id,
        title: p.title,
        handle: p.handle,
        imageUrl,
        variantId: variant?.id,
        price: variant?.price ? parseFloat(variant.price.amount) : undefined
      };
    }) || []
  );
}

/**
 * Creates a checkout cart on Shopify and returns the hosted checkout URL
 */
export async function createShopifyCheckout(lines: { merchandiseId: string; quantity: number }[]) {
  const data = await shopifyFetch<{
    cartCreate: {
      cart: { id: string; checkoutUrl: string };
      userErrors: { field: string; message: string }[];
    };
  }>({
    query: CREATE_CART_MUTATION,
    variables: { lines }
  });

  return data?.cartCreate?.cart || null;
}


