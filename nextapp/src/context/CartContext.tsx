'use client';
import React, { createContext, useContext, useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  strength: string;
  img: string;
  qty: number;
}

interface CartContextType {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, 'qty'> & { qty?: number }) => void;
  changeQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  totalItems: number;
  subtotal: number;
  toast: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'bf-1000',
      name: 'BlueFin Omega-3 1000 MG',
      price: 990,
      strength: 'EPA 180mg | DHA 120mg',
      img: '/assets/product_1000mg_fullview.png',
      qty: 1
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const addToCart = (item: Omit<CartItem, 'qty'> & { qty?: number }) => {
    setCart(prev => {
      const idx = prev.findIndex(c => c.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].qty += item.qty || 1;
        return copy;
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
    showToast(`Added ${item.name} to cart`);
    setCartOpen(true);
  };

  const changeQty = (id: string, delta: number) => {
    setCart(prev =>
      prev.flatMap(c => {
        if (c.id !== id) return [c];
        const newQty = c.qty + delta;
        return newQty <= 0 ? [] : [{ ...c, qty: newQty }];
      })
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(c => c.id !== id));
    showToast('Item removed from cart');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        changeQty,
        removeFromCart,
        totalItems,
        subtotal,
        toast,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
