// Bademli — Ürün verileri ve sepet yönetimi

const IMG_BASE = 'https://images.unsplash.com/';
const IMG_PARAMS = '?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=srgb&w=800';

const products = [
    {
        id: 1,
        name: 'Çiğ İç Badem',
        category: 'cig',
        categoryLabel: 'Çiğ Badem',
        description: 'Datça bahçelerinden, doğal kurutulmuş, iri taneli çiğ iç badem.',
        price: 420,
        unit: 'kg',
        image: 'photo-1579282940892-6152e6e80c52',
        badge: 'Çok Satan'
    },
    {
        id: 2,
        name: 'Kabuklu Datça Bademi',
        category: 'cig',
        categoryLabel: 'Çiğ Badem',
        description: 'Kabuğuyla hasat edilmiş, taze Datça yerli bademi. Uzun ömürlü saklama.',
        price: 260,
        unit: 'kg',
        image: 'photo-1430163393927-3dab9af7ea38',
        badge: 'Yerli'
    },
    {
        id: 3,
        name: 'Sade Kavrulmuş Badem',
        category: 'kavrulmus',
        categoryLabel: 'Kavrulmuş',
        description: 'Tuzsuz, yağsız, özel fırında altın rengi kavrulmuş taze badem.',
        price: 480,
        unit: 'kg',
        image: 'photo-1535117156854-d5c5243361a8',
        badge: null
    },
    {
        id: 4,
        name: 'Tuzlu Kavrulmuş Badem',
        category: 'kavrulmus',
        categoryLabel: 'Kavrulmuş',
        description: 'Himalaya tuzu ile kavrulmuş, çıtır çıtır atıştırmalık badem.',
        price: 490,
        unit: 'kg',
        image: 'photo-1508779018996-601e37fa274e',
        badge: null
    },
    {
        id: 5,
        name: 'Ballı Kavrulmuş Badem',
        category: 'kavrulmus',
        categoryLabel: 'Kavrulmuş',
        description: 'Anzer balı ile karamelize edilmiş, tatlı-tuzlu özel kavrum.',
        price: 540,
        unit: 'kg',
        image: 'photo-1642337241968-48094a7709ea',
        badge: 'Özel'
    },
    {
        id: 6,
        name: 'Badem Ezmesi (Kremalı)',
        category: 'ezme',
        categoryLabel: 'Ezme',
        description: 'Tek içerik: %100 badem. Şekersiz, katkısız, kremamsı kıvam.',
        price: 320,
        unit: '350 gr',
        image: 'photo-1608797178974-15b35a64ede9',
        badge: 'Organik'
    },
    {
        id: 7,
        name: 'Çikolatalı Badem Ezmesi',
        category: 'ezme',
        categoryLabel: 'Ezme',
        description: 'Bitter çikolata ve badem ezmesi karışımı. Kahvaltının vazgeçilmezi.',
        price: 280,
        unit: '300 gr',
        image: 'photo-1554298377-9e4df6fd965c',
        badge: null
    },
    {
        id: 8,
        name: 'Badem Sütü',
        category: 'sut',
        categoryLabel: 'Süt',
        description: 'Laktozsuz, vegan, şekersiz. Taze çekilmiş doğal badem sütü.',
        price: 95,
        unit: 'litre',
        image: 'photo-1601436423474-51738541c1b1',
        badge: 'Vegan'
    },
    {
        id: 9,
        name: 'Soğuk Sıkım Badem Yağı',
        category: 'sut',
        categoryLabel: 'Yağ',
        description: 'Yemeklik ve cilt bakımı için saf, soğuk sıkım badem yağı.',
        price: 380,
        unit: '250 ml',
        image: 'photo-1608797178948-33eecffb3728',
        badge: null
    },
    {
        id: 10,
        name: 'Badem Unu',
        category: 'un',
        categoryLabel: 'Un',
        description: 'Glutensiz tariflerin yıldızı. İnce öğütülmüş, beyaz badem unu.',
        price: 220,
        unit: '500 gr',
        image: 'photo-1602485177902-3b5131ee23be',
        badge: 'Glutensiz'
    },
    {
        id: 11,
        name: 'Bademli Kurabiye',
        category: 'un',
        categoryLabel: 'Tatlı',
        description: 'Ev yapımı, badem unu ile hazırlanmış glutensiz yumuşak kurabiye.',
        price: 180,
        unit: '400 gr',
        image: 'photo-1514132687615-019f4d9e1c74',
        badge: null
    },
    {
        id: 12,
        name: 'Badem Acıbademi',
        category: 'un',
        categoryLabel: 'Tatlı',
        description: 'Geleneksel İzmir acıbademi. Sadece badem, yumurta akı ve şeker.',
        price: 260,
        unit: '500 gr',
        image: 'photo-1554298377-9e4df6fd965c',
        badge: 'Geleneksel'
    },
    {
        id: 13,
        name: 'Şekerli Badem',
        category: 'ozel',
        categoryLabel: 'Şekerleme',
        description: 'Renkli şeker kaplamalı klasik badem şekeri. Nişan ve düğünlerin vazgeçilmezi.',
        price: 240,
        unit: '500 gr',
        image: 'photo-1504623912536-fdb14bcb0d1a',
        badge: null
    },
    {
        id: 14,
        name: 'Çikolata Kaplı Badem',
        category: 'ozel',
        categoryLabel: 'Şekerleme',
        description: 'Kavrulmuş badem üzerine sütlü ve bitter çikolata kaplama.',
        price: 360,
        unit: '500 gr',
        image: 'photo-1504623912536-fdb14bcb0d1a',
        badge: 'Popüler'
    },
    {
        id: 15,
        name: 'Çağla (Taze Badem)',
        category: 'ozel',
        categoryLabel: 'Özel',
        description: 'Sezonluk! İlkbaharın ilk tomurcukları, dalından taze, yumuşak badem.',
        price: 150,
        unit: 'kg',
        image: 'photo-1627820752174-acae1b399128',
        badge: 'Sezonluk'
    },
    {
        id: 16,
        name: 'Badem Hediye Kutusu',
        category: 'ozel',
        categoryLabel: 'Hediye',
        description: '5 farklı badem çeşidinden oluşan, özel kutulanmış premium hediye seti.',
        price: 780,
        unit: 'kutu',
        image: 'photo-1601436423581-9c59173e52d4',
        badge: 'Hediyelik'
    }
];

// State
let cart = loadCart();
let activeCategory = 'hepsi';

// Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartSubtitle = document.getElementById('cartSubtitle');
const overlay = document.getElementById('overlay');
const checkoutBtn = document.getElementById('checkoutBtn');
const categoryFilter = document.getElementById('categoryFilter');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// Utility
function formatPrice(price) {
    return price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ₺';
}

function getImageUrl(photoId, width = 800) {
    return `${IMG_BASE}${photoId}?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=srgb&w=${width}`;
}

function loadCart() {
    try {
        const data = localStorage.getItem('bademli-cart');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem('bademli-cart', JSON.stringify(cart));
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// Render products
function renderProducts() {
    const filtered = activeCategory === 'hepsi'
        ? products
        : products.filter(p => p.category === activeCategory);

    productsGrid.innerHTML = filtered.map(product => `
        <article class="product-card">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${getImageUrl(product.image, 600)}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        ${formatPrice(product.price)}
                        <span class="unit">/ ${product.unit}</span>
                    </div>
                    <button class="add-btn" data-id="${product.id}" aria-label="${product.name} sepete ekle">+</button>
                </div>
            </div>
        </article>
    `).join('');

    productsGrid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => addToCart(Number(btn.dataset.id)));
    });
}

// Cart operations
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    renderCart();
    showToast(`✓ ${product.name} sepete eklendi`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCart();
    }
}

function renderCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    if (cartSubtitle) {
        cartSubtitle.textContent = `${totalItems} ürün`;
    }

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🧺</div>
                <p>Sepetiniz şu an boş.</p>
                <span>Lezzetleri keşfetmeye hazır mısınız?</span>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${getImageUrl(item.image, 200)}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="price">${formatPrice(item.price * item.quantity)}</span>
                    <div class="quantity-control">
                        <button data-action="decrease" data-id="${item.id}" aria-label="Azalt">−</button>
                        <span>${item.quantity}</span>
                        <button data-action="increase" data-id="${item.id}" aria-label="Arttır">+</button>
                    </div>
                </div>
                <button class="remove-btn" data-action="remove" data-id="${item.id}" aria-label="Ürünü kaldır">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </div>
        `).join('');

        cartItems.querySelectorAll('button[data-action]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = Number(btn.dataset.id);
                const action = btn.dataset.action;
                if (action === 'increase') updateQuantity(id, 1);
                else if (action === 'decrease') updateQuantity(id, -1);
                else if (action === 'remove') removeFromCart(id);
            });
        });
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = formatPrice(total);
    if (cartSubtotal) {
        cartSubtotal.textContent = formatPrice(total);
    }
}

// Drawer handling
function openCart() {
    cartDrawer.classList.add('open');
    overlay.classList.add('active');
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('open');
    overlay.classList.remove('active');
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Event listeners
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Sepetiniz boş görünüyor');
        return;
    }
    showToast('✓ Siparişiniz alındı! Teşekkürler');
    cart = [];
    saveCart();
    renderCart();
    setTimeout(closeCart, 1200);
});

categoryFilter.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;
    activeCategory = e.target.dataset.category;
    categoryFilter.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn === e.target);
    });
    renderProducts();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✓ Mesajınız iletildi, teşekkürler!');
    contactForm.reset();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
});

// Init
renderProducts();
renderCart();
