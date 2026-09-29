// ==========================================================================
// BLUEFIN — INTERACTIVE APPLICATION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. HEADER SCROLL STATE
  // ------------------------------------------------------------------------
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ------------------------------------------------------------------------
  // 2. SHOPPING CART STATE & DRAWER
  // ------------------------------------------------------------------------
  const cartTrigger = document.getElementById('cartTrigger');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBadge = document.getElementById('cartBadge');
  const cartItemCountLabel = document.getElementById('cartItemCountLabel');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const checkoutTotal = document.getElementById('checkoutTotal');
  const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

  // Initial cart state
  let cart = [
    {
      id: 'bf-1000',
      name: 'BlueFin Omega-3 1000 MG',
      price: 990,
      strength: 'EPA 180mg | DHA 120mg',
      img: './assets/product_1000mg_fullview.png',
      qty: 1
    }
  ];

  function openCart() {
    cartDrawer.classList.add('active');
    cartBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('active');
    cartBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

  function renderCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #5e7c94;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.5;">
            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p style="font-size: 1rem; font-weight: 500;">Your cart is currently empty.</p>
          <a href="#products" class="btn btn-navy-pill" style="margin-top: 1.5rem; font-size: 0.78rem;" onclick="closeCart()">EXPLORE PRODUCTS</a>
        </div>
      `;
    } else {
      cart.forEach((item, index) => {
        total += item.price * item.qty;
        totalItems += item.qty;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
          <div class="cart-item-thumb">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-strength">${item.strength}</div>
            <div class="qty-control">
              <button class="qty-btn" data-action="dec" data-index="${index}">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" data-action="inc" data-index="${index}">+</button>
            </div>
          </div>
          <div style="text-align: right;">
            <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
            <button style="font-size: 0.75rem; color: #dc2626; margin-top: 0.5rem; text-decoration: underline;" data-action="remove" data-index="${index}">Remove</button>
          </div>
        `;
        cartItemsList.appendChild(itemEl);
      });
    }

    cartBadge.textContent = totalItems;
    cartItemCountLabel.textContent = `(${totalItems} item${totalItems === 1 ? '' : 's'})`;
    cartSubtotal.textContent = `₹${total.toLocaleString()}`;
    checkoutTotal.textContent = `₹${total.toLocaleString()}`;
  }

  // Handle Cart item actions
  cartItemsList.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    const index = parseInt(btn.dataset.index);

    if (action === 'inc') {
      cart[index].qty += 1;
    } else if (action === 'dec') {
      if (cart[index].qty > 1) {
        cart[index].qty -= 1;
      } else {
        cart.splice(index, 1);
      }
    } else if (action === 'remove') {
      cart.splice(index, 1);
    }

    renderCart();
  });

  // Handle Add to Cart buttons on product panels
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      const img = btn.dataset.img;
      const strength = btn.dataset.strength;

      const existingIndex = cart.findIndex(item => item.id === id);
      if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
      } else {
        cart.push({ id, name, price, img, strength, qty: 1 });
      }

      renderCart();
      openCart();
      showToast(`Added ${name} to your cart`);
    });
  });

  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your cart is empty. Please select a product first.');
        return;
      }
      showToast('Proceeding to Secure Checkout... Thank you for choosing BlueFin!');
    });
  }

  renderCart();

  // ------------------------------------------------------------------------
  // 3. PRODUCT QUICK VIEW MODAL
  // ------------------------------------------------------------------------
  const productModal = document.getElementById('productModal');
  const productModalBackdrop = document.getElementById('productModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContentGrid = document.getElementById('modalContentGrid');

  const productData = {
    '1000': {
      title: 'BlueFin Omega-3 1000 MG',
      tag: 'HIGH POTENCY FORMULA',
      potency: 'EPA 180mg | DHA 120mg per Softgel',
      price: 990,
      image: './assets/product_1000mg_fullview.png',
      desc: 'Expertly capsulated high-potency fish oil derived from cold-water pelagic fish. Molecularly distilled to eliminate all heavy metals, mercury, and environmental toxins. Engineered for daily heart, joint, and brain health for adults.',
      specs: [
        { label: 'Total Fish Oil', val: '1000 mg' },
        { label: 'Eicosapentaenoic Acid (EPA)', val: '180 mg' },
        { label: 'Docosahexaenoic Acid (DHA)', val: '120 mg' },
        { label: 'Other Omega-3 Fatty Acids', val: '60 mg' },
        { label: 'Natural Vitamin E (d-alpha tocopherol)', val: '1.5 IU' },
        { label: 'Serving Size', val: '1 Softgel Daily after meals' },
        { label: 'Form', val: 'Odorless Softgel Capsule' }
      ]
    },
    '500': {
      title: 'BlueFin Omega-3 500 MG',
      tag: 'GENTLE EVERYDAY FORMULA',
      potency: 'EPA 90mg | DHA 60mg per Softgel',
      price: 590,
      image: './assets/product_500mg_fullview.png',
      desc: 'Formulated specifically for teenagers, elderly family members, and everyday gentle maintenance. Pure, easy-to-swallow softgels delivering essential Omega-3 fatty acids without any fishy burps.',
      specs: [
        { label: 'Total Fish Oil', val: '500 mg' },
        { label: 'Eicosapentaenoic Acid (EPA)', val: '90 mg' },
        { label: 'Docosahexaenoic Acid (DHA)', val: '60 mg' },
        { label: 'Other Omega-3 Fatty Acids', val: '30 mg' },
        { label: 'Natural Vitamin E', val: '1.0 IU' },
        { label: 'Serving Size', val: '1 Softgel Daily' },
        { label: 'Form', val: 'Compact Smooth Softgel' }
      ]
    }
  };

  function openProductModal(productId) {
    const data = productData[productId];
    if (!data) return;

    modalContentGrid.innerHTML = `
      <div class="modal-img-col">
        <img src="${data.image}" alt="${data.title}">
      </div>
      <div class="modal-info-col">
        <span class="product-badge ${productId === '500' ? 'coral-badge' : ''}">${data.tag}</span>
        <h3 class="modal-title">${data.title}</h3>
        <div class="modal-potency">${data.potency}</div>
        <p class="modal-desc">${data.desc}</p>
        
        <div class="supp-facts-box">
          <div class="supp-facts-title">Supplement Facts (60 Softgels / Bottle)</div>
          ${data.specs.map(s => `
            <div class="supp-row">
              <span>${s.label}</span>
              <strong>${s.val}</strong>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem;">
          <div class="price-wrap">
            <span class="currency">₹</span>
            <span class="amount">${data.price}</span>
            <span class="unit">/ 60 Softgels</span>
          </div>
          <button class="btn btn-navy-pill modal-add-btn" data-id="bf-${productId}" data-name="${data.title}" data-price="${data.price}" data-img="${data.image}" data-strength="${data.potency}">
            ADD TO CART
          </button>
        </div>
      </div>
    `;

    // Hook add to cart button inside modal
    modalContentGrid.querySelector('.modal-add-btn').addEventListener('click', (e) => {
      const btn = e.target;
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      const img = btn.dataset.img;
      const strength = btn.dataset.strength;

      const existingIndex = cart.findIndex(item => item.id === id);
      if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
      } else {
        cart.push({ id, name, price, img, strength, qty: 1 });
      }

      renderCart();
      closeProductModal();
      openCart();
      showToast(`Added ${name} to your cart`);
    });

    productModal.classList.add('active');
    productModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    productModal.classList.remove('active');
    productModalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.view-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openProductModal(btn.dataset.product);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (productModalBackdrop) productModalBackdrop.addEventListener('click', closeProductModal);

  // ------------------------------------------------------------------------
  // 4. KERALA PHARMACY LOCATOR MODAL
  // ------------------------------------------------------------------------
  const findPharmacyBtn = document.getElementById('findPharmacyBtn');
  const pharmacyModal = document.getElementById('pharmacyModal');
  const pharmacyModalBackdrop = document.getElementById('pharmacyModalBackdrop');
  const pharmacyModalCloseBtn = document.getElementById('pharmacyModalCloseBtn');
  const districtSelect = document.getElementById('districtSelect');
  const pharmaciesList = document.getElementById('pharmaciesList');

  const pharmacyData = {
    kochi: [
      { name: 'Aster Medcity Pharmacy', addr: 'Kuttisahib Road, Cheranalloor, Kochi', phone: '+91 484 669 9999', stock: 'In Stock (1000mg & 500mg)' },
      { name: 'Neethi Medical Store', addr: 'MG Road, Jos Junction, Kochi', phone: '+91 484 235 1421', stock: 'In Stock' },
      { name: 'Apollo Pharmacy — Edappally', addr: 'Toll Junction, Edappally, Kochi', phone: '+91 484 401 2288', stock: 'In Stock' },
      { name: 'Lisie Hospital Pharmacy', addr: 'Kathrikadavu, Kaloor, Kochi', phone: '+91 484 240 2044', stock: 'In Stock' }
    ],
    tvm: [
      { name: 'KIMSHEALTH Medical Store', addr: 'Anayara, Thiruvananthapuram', phone: '+91 471 294 1000', stock: 'In Stock' },
      { name: 'Neethi Super Medicals', addr: 'East Fort, Thiruvananthapuram', phone: '+91 471 247 3344', stock: 'In Stock' },
      { name: 'Apollo Pharmacy — Kowdiar', addr: 'Kowdiar Junction, Thiruvananthapuram', phone: '+91 471 231 8899', stock: 'In Stock' }
    ],
    kozhikode: [
      { name: 'MIMS Aster Pharmacy', addr: 'Mini Bypass Road, Govindapuram, Kozhikode', phone: '+91 495 248 8000', stock: 'In Stock' },
      { name: 'Baby Memorial Hospital Pharmacy', addr: 'Arayidathupalam, Kozhikode', phone: '+91 495 277 7777', stock: 'In Stock' },
      { name: 'MedPlus Pharmacy', addr: 'Mavoor Road, Kozhikode', phone: '+91 495 401 1234', stock: 'In Stock' }
    ],
    thrissur: [
      { name: 'Jubilee Mission Medical Store', addr: 'East Fort, Thrissur', phone: '+91 487 243 2200', stock: 'In Stock' },
      { name: 'Amala Pharmacy', addr: 'Amala Nagar, Thrissur', phone: '+91 487 230 4000', stock: 'In Stock' },
      { name: 'Neethi Medical Store', addr: 'Round West, Thrissur', phone: '+91 487 242 8811', stock: 'In Stock' }
    ],
    kottayam: [
      { name: 'Caritas Hospital Pharmacy', addr: 'Thellakom, Kottayam', phone: '+91 481 279 0025', stock: 'In Stock' },
      { name: 'Apollo Pharmacy — Baker Junction', addr: 'Baker Junction, Kottayam', phone: '+91 481 256 7812', stock: 'In Stock' }
    ],
    kannur: [
      { name: 'AKG Memorial Hospital Pharmacy', addr: 'Talap, Kannur', phone: '+91 497 276 2500', stock: 'In Stock' },
      { name: 'Neethi Medical Store', addr: 'Fort Road, Kannur', phone: '+91 497 270 4455', stock: 'In Stock' }
    ]
  };

  function renderPharmacies(districtKey) {
    const list = pharmacyData[districtKey] || pharmacyData['kochi'];
    pharmaciesList.innerHTML = list.map(item => `
      <div class="pharmacy-card">
        <div class="pharm-store-name">${item.name}</div>
        <div class="pharm-address">${item.addr}</div>
        <div class="pharm-meta">
          <span>${item.phone}</span>
          <span>● ${item.stock}</span>
        </div>
      </div>
    `).join('');
  }

  function openPharmacyModal() {
    renderPharmacies(districtSelect.value);
    pharmacyModal.classList.add('active');
    pharmacyModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePharmacyModal() {
    pharmacyModal.classList.remove('active');
    pharmacyModalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (findPharmacyBtn) findPharmacyBtn.addEventListener('click', openPharmacyModal);
  if (pharmacyModalCloseBtn) pharmacyModalCloseBtn.addEventListener('click', closePharmacyModal);
  if (pharmacyModalBackdrop) pharmacyModalBackdrop.addEventListener('click', closePharmacyModal);
  if (districtSelect) {
    districtSelect.addEventListener('change', (e) => {
      renderPharmacies(e.target.value);
    });
  }

  // Map pin interactive click
  const mapPins = document.querySelectorAll('.map-pin-group');
  const mapTooltip = document.getElementById('mapTooltip');
  const tooltipDistrict = document.getElementById('tooltipDistrict');

  const districtMapping = {
    'Kochi': 'kochi',
    'Thiruvananthapuram': 'tvm',
    'Kozhikode': 'kozhikode',
    'Thrissur': 'thrissur',
    'Kottayam': 'kottayam'
  };

  mapPins.forEach(pin => {
    pin.addEventListener('click', () => {
      const distName = pin.dataset.district;
      const key = districtMapping[distName] || 'kochi';
      districtSelect.value = key;
      openPharmacyModal();
    });

    pin.addEventListener('mouseenter', () => {
      const distName = pin.dataset.district;
      tooltipDistrict.textContent = `${distName} Hub`;
      mapTooltip.style.opacity = '1';
    });
  });

  // ------------------------------------------------------------------------
  // 5. NEWSLETTER SUBSCRIPTION
  // ------------------------------------------------------------------------
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      if (emailInput && emailInput.value) {
        showToast(`Thank you! ${emailInput.value} has been subscribed to BlueFin updates.`);
        emailInput.value = '';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 6. TOAST NOTIFICATION HELPER
  // ------------------------------------------------------------------------
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ------------------------------------------------------------------------
  // 7. CAPSULE HOVER & INTERACTIVITY
  // ------------------------------------------------------------------------
  const capsuleContainer = document.getElementById('capsuleContainer');
  const solarHalo = document.getElementById('solarHalo');

  if (capsuleContainer && solarHalo) {
    capsuleContainer.addEventListener('mousemove', (e) => {
      const rect = capsuleContainer.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      capsuleContainer.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
      solarHalo.style.transform = `translate(calc(-50% + ${x * 20}px), calc(-50% + ${y * 20}px)) scale(1.05)`;
    });

    capsuleContainer.addEventListener('mouseleave', () => {
      capsuleContainer.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
      solarHalo.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  }

  // ------------------------------------------------------------------------
  // 8. MOBILE MENU TOGGLE
  // ------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.style.display === 'flex';
      if (isOpen) {
        navMenu.style.display = '';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.backgroundColor = 'rgba(7, 33, 54, 0.98)';
        navMenu.style.backdropFilter = 'blur(16px)';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '2rem';
        navMenu.style.gap = '1.5rem';
      }
    });
  }

});
