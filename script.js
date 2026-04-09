// Badem Dükkânı - Ürün verileri ve sepet yönetimi

const products = [
    {
        id: 1,
        name: 'Çiğ İç Badem',
        category: 'cig',
        categoryLabel: 'Çiğ Badem',
        description: 'Datça bahçelerinden, doğal kurutulmuş, kabuksuz iri taneli çiğ badem.',
        price: 420,
        unit: '/ kg',
        emoji: '🌰',
        badge: 'Çok Satan'
    },
    {
        id: 2,
        name: 'Kabuklu Datça Bademi',
        category: 'cig',
        categoryLabel: 'Çiğ Badem',
        description: 'Kabuğu ile hasat edilmiş, taze Datça yerli bademi. Uzun ömürlü.',
        price: 260,
        unit: '/ kg',
        emoji: '🥜',
        badge: 'Yerli'
    },
    {
        id: 3,
        name: 'Sade Kavrulmuş Badem',
        category: 'kavrulmus',
        categoryLabel: 'Kavrulmuş',
        description: 'Tuzsuz, yağsız, özel fırında altın rengi kavrulmuş taze badem.',
        price: 480,
        unit: '/ kg',
        emoji: '🥜',
        badge: null
    },
    {
        id: 4,
        name: 'Tuzlu Kavrulmuş Badem',
        category: 'kavrulmus',
        categoryLabel: 'Kavrulmuş',
        description: 'Himalaya tuzu ile kavrulmuş, çıtır çıtır, atıştırmalık badem.',
        price: 490,
        unit: '/ kg',
        emoji: '🧂',
        badge: null
    },
    {
        id: 5,
        name: 'Ballı Kavrulmuş Badem',
        category: 'kavrulmus',
        categoryLabel: 'Kavrulmuş',
        description: 'Anzer balı ile karamelize edilmiş, tatlı-tuzlu özel kavrum.',
        price: 540,
        unit: '/ kg',
        emoji: '🍯',
        badge: 'Özel'
    },
    {
        id: 6,
        name: 'Badem Ezmesi (Kremalı)',
        category: 'ezme',
        categoryLabel: 'Ezme',
        description: 'Tek içerik: %100 badem. Şekersiz, katkısız, kremamsı kıvam.',
        price: 320,
        unit: '/ 350 gr',
        emoji: '🥣',
        badge: 'Organik'
    },
    {
        id: 7,
        name: 'Çikolatalı Badem Ezmesi',
        category: 'ezme',
        categoryLabel: 'Ezme',
        description: 'Bitter çikolata ve badem ezmesi karışımı. Kahvaltının vazgeçilmezi.',
        price: 280,
        unit: '/ 300 gr',
        emoji: '🍫',
        badge: null
    },
    {
        id: 8,
        name: 'Badem Sütü',
        category: 'sut',
        categoryLabel: 'Süt',
        description: 'Laktozsuz, vegan, şekersiz. Taze çekilmiş badem sütü.',
        price: 95,
        unit: '/ litre',
        emoji: '🥛',
        badge: 'Vegan'
    },
    {
        id: 9,
        name: 'Soğuk Sıkım Badem Yağı',
        category: 'sut',
        categoryLabel: 'Yağ',
        description: 'Yemeklik ve cilt bakımı için saf, soğuk sıkım badem yağı.',
        price: 380,
        unit: '/ 250 ml',
        emoji: '🫒',
        badge: null
    },
    {
        id: 10,
        name: 'Badem Unu',
        category: 'un',
        categoryLabel: 'Un',
        description: 'Glutensiz tariflerin yıldızı. İnce öğütülmüş, beyaz badem unu.',
        price: 220,
        unit: '/ 500 gr',
        emoji: '🌾',
        badge: 'Glutensiz'
    },
    {
        id: 11,
        name: 'Bademli Kurabiye',
        category: 'un',
        categoryLabel: 'Tatlı',
        description: 'Ev yapımı, badem unu ile hazırlanmış glutensiz yumuşak kurabiye.',
        price: 180,
        unit: '/ 400 gr',
        emoji: '🍪',
        badge: null
    },
    {
        id: 12,
        name: 'Badem Acıbademi',
        category: 'un',
        categoryLabel: 'Tatlı',
        description: 'Geleneksel İzmir acıbademi. Sadece badem, yumurta akı ve şeker.',
        price: 260,
        unit: '/ 500 gr',
        emoji: '🍘',
        badge: 'Geleneksel'
    },
    {
        id: 13,
        name: 'Şekerli Badem (Badem Şekeri)',
        category: 'ozel',
        categoryLabel: 'Şekerleme',
        description: 'Renkli, sert şeker kaplamalı klasik badem şekeri. Nişan ve düğünlerin vazgeçilmezi.',
        price: 240,
        unit: '/ 500 gr',
        emoji: '🍬',
        badge: null
    },
    {
        id: 14,
        name: 'Çikolata Kaplı Badem',
        category: 'ozel',
        categoryLabel: 'Şekerleme',
        description: 'Kavrulmuş badem üzerine sütlü ve bitter çikolata kaplama.',
        price: 360,
        unit: '/ 500 gr',
        emoji: '🍫',
        badge: 'Popüler'
    },
    {
        id: 15,
        name: 'Çağla (Taze Badem)',
        category: 'ozel',
        categoryLabel: 'Özel',
        description: 'Sezonluk! İlkbaharın ilk tomurcukları — dalından taze, yumuşak badem.',
        price: 150,
        unit: '/ kg',
        emoji: '🌱',
        badge: 'Sezonluk'
    },
    {
        id: 16,
        name: 'Badem Hediye Kutusu',
        category: 'ozel',
        categoryLabel: 'Hediye',
        description: '5 farklı badem çeşidinden oluşan, özel kutulanmış premium hediye seti.',
        price: 780,
        unit: '/ kutu',
        emoji: '🎁',
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
        const data = localStorage.getItem('badem-dukkani-cart');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem('badem-dukkani-cart', JSON.stringify(cart));
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
    showToast(`${product.name} sepete eklendi 🌰`);
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
        cartItems.innerHTML = '<p class="cart-empty">Sepetiniz şu an boş. 🌰</p>';
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
    showToast('Siparişiniz alındı! Teşekkürler 🌰');
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
