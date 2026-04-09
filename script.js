// Köy Pazarı - Ürün verileri ve sepet yönetimi

const products = [
    {
        id: 1,
        name: 'Köy Yumurtası',
        category: 'yumurta',
        categoryLabel: 'Yumurta',
        description: 'Gezen tavuklardan, doğal yemle beslenen, taze köy yumurtası.',
        price: 120,
        unit: '/ 15 adet',
        emoji: '🥚',
        badge: 'Çok Satan'
    },
    {
        id: 2,
        name: 'Misket Elması',
        category: 'meyve',
        categoryLabel: 'Meyve',
        description: 'Dağ eteklerinde yetişen, mis kokulu yerli misket elması.',
        price: 55,
        unit: '/ kg',
        emoji: '🍎',
        badge: 'Taze'
    },
    {
        id: 3,
        name: 'Çiçek Balı',
        category: 'bal',
        categoryLabel: 'Bal',
        description: 'Kekik ve yayla çiçeklerinden süzme, katıksız organik bal.',
        price: 380,
        unit: '/ 850 gr',
        emoji: '🍯',
        badge: 'Organik'
    },
    {
        id: 4,
        name: 'Köy Tereyağı',
        category: 'sut',
        categoryLabel: 'Süt Ürünleri',
        description: 'Günlük süzme sütten yapılan, hakiki köy tereyağı.',
        price: 260,
        unit: '/ 500 gr',
        emoji: '🧈',
        badge: null
    },
    {
        id: 5,
        name: 'Ezine Peyniri',
        category: 'sut',
        categoryLabel: 'Süt Ürünleri',
        description: 'Koyun ve keçi sütü karışımından, tam olgun beyaz peynir.',
        price: 320,
        unit: '/ kg',
        emoji: '🧀',
        badge: 'Yeni'
    },
    {
        id: 6,
        name: 'Doğal Süt',
        category: 'sut',
        categoryLabel: 'Süt Ürünleri',
        description: 'Sabah sağımı, hiç işlem görmemiş, taze inek sütü.',
        price: 45,
        unit: '/ litre',
        emoji: '🥛',
        badge: null
    },
    {
        id: 7,
        name: 'Kuru Kayısı',
        category: 'meyve',
        categoryLabel: 'Meyve',
        description: 'Malatya bağlarından güneşte kurutulmuş, kükürtsüz kayısı.',
        price: 180,
        unit: '/ 500 gr',
        emoji: '🍑',
        badge: null
    },
    {
        id: 8,
        name: 'Domates',
        category: 'meyve',
        categoryLabel: 'Sebze',
        description: 'Ata tohumundan yetişmiş, bahçe kokulu köy domatesi.',
        price: 40,
        unit: '/ kg',
        emoji: '🍅',
        badge: null
    },
    {
        id: 9,
        name: 'Gül Reçeli',
        category: 'bal',
        categoryLabel: 'Reçel',
        description: 'Isparta güllerinden el yapımı, geleneksel gül reçeli.',
        price: 140,
        unit: '/ 450 gr',
        emoji: '🌹',
        badge: 'Geleneksel'
    },
    {
        id: 10,
        name: 'Kırmızı Mercimek',
        category: 'tahil',
        categoryLabel: 'Bakliyat',
        description: 'Anadolu topraklarından doğal yetişmiş kırmızı mercimek.',
        price: 85,
        unit: '/ kg',
        emoji: '🫘',
        badge: null
    },
    {
        id: 11,
        name: 'Bulgur',
        category: 'tahil',
        categoryLabel: 'Tahıl',
        description: 'Köy taş değirmeninden, kendir bulgur. Yemeklerin vazgeçilmezi.',
        price: 60,
        unit: '/ kg',
        emoji: '🌾',
        badge: null
    },
    {
        id: 12,
        name: 'Ceviz İçi',
        category: 'tahil',
        categoryLabel: 'Kuruyemiş',
        description: 'Taze hasat, iri taneli, yerli ceviz içi.',
        price: 420,
        unit: '/ kg',
        emoji: '🌰',
        badge: 'Premium'
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
const overlay = document.getElementById('overlay');
const checkoutBtn = document.getElementById('checkoutBtn');
const categoryFilter = document.getElementById('categoryFilter');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// Utility
function formatPrice(price) {
    return price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ₺';
}

function loadCart() {
    try {
        const data = localStorage.getItem('koy-pazari-cart');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem('koy-pazari-cart', JSON.stringify(cart));
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
        <div class="product-card">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <span>${product.emoji}</span>
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">
                        ${formatPrice(product.price)}
                        <span class="unit">${product.unit}</span>
                    </span>
                    <button class="add-btn" data-id="${product.id}">Sepete Ekle</button>
                </div>
            </div>
        </div>
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
    showToast(`${product.name} sepete eklendi 🧺`);
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

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Sepetiniz şu an boş. 🧺</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="price">${formatPrice(item.price * item.quantity)}</span>
                    <div class="quantity-control">
                        <button data-action="decrease" data-id="${item.id}">−</button>
                        <span>${item.quantity}</span>
                        <button data-action="increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-btn" data-action="remove" data-id="${item.id}" aria-label="Ürünü kaldır">🗑️</button>
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
}

// Drawer handling
function openCart() {
    cartDrawer.classList.add('open');
    overlay.classList.add('active');
    cartDrawer.setAttribute('aria-hidden', 'false');
}

function closeCart() {
    cartDrawer.classList.remove('open');
    overlay.classList.remove('active');
    cartDrawer.setAttribute('aria-hidden', 'true');
}

// Event listeners
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Sepetiniz boş görünüyor 🙂');
        return;
    }
    showToast('Siparişiniz alındı! Teşekkürler 🌾');
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
    showToast('Mesajınız iletildi, teşekkürler! ✉️');
    contactForm.reset();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
});

// Init
renderProducts();
renderCart();
