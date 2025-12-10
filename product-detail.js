document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Product data (same as in main.js)
    const products = {
        1: {
            id: 1,
            name: "Smart Water Flow Monitor",
            category: "Smart Devices",
            price: 149.99,
            rating: 5,
            reviews: 128,
            description: "Track your home's water usage in real-time with this smart monitor that connects to your smartphone.",
            fullDescription: "The Smart Water Flow Monitor is a revolutionary device that helps you take control of your water consumption. With real-time monitoring and intelligent analytics, you can identify wasteful usage patterns and save money on your water bill. Compatible with both iOS and Android devices through the Droply app.",
            image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            specs: {
                "Connectivity": "Wi-Fi, Bluetooth",
                "Battery Life": "2 years",
                "Compatibility": "iOS 12+, Android 8+",
                "Warranty": "3 years",
                "Installation": "DIY - No plumber needed"
            }
        },
        2: {
            id: 2,
            name: "Eco Shower Head",
            category: "Bathroom",
            price: 34.99,
            rating: 4.5,
            reviews: 94,
            description: "Save up to 50% water without compromising your shower experience.",
            fullDescription: "Our Eco Shower Head is designed to deliver a powerful, satisfying shower while using significantly less water. With multiple spray settings and self-cleaning nozzles, you get the perfect shower every time while conserving water and energy.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            specs: {
                "Water Saving": "Up to 50%",
                "Spray Settings": "5 different modes",
                "Material": "Stainless steel",
                "Flow Rate": "1.5 GPM",
                "Installation": "Tool-free"
            }
        },
        3: {
            id: 3,
            name: "Smart Irrigation System",
            category: "Garden",
            price: 89.99,
            rating: 5,
            reviews: 67,
            description: "Automated watering system with weather sensing to optimize your garden's water usage.",
            fullDescription: "The Smart Irrigation System uses weather data and soil moisture sensors to water your garden exactly when needed. Save up to 70% on outdoor water usage while keeping your plants healthy and vibrant.",
            image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            specs: {
                "Zones": "Up to 8 zones",
                "Weather Integration": "Yes",
                "Soil Sensors": "Included",
                "Smartphone Control": "Yes",
                "Coverage": "Up to 1/4 acre"
            }
        },
        4: {
            id: 4,
            name: "High-Efficiency Faucet Aerator",
            category: "Kitchen",
            price: 14.99,
            rating: 4.5,
            reviews: 156,
            description: "Reduce water flow by 40% while maintaining pressure.",
            fullDescription: "This High-Efficiency Faucet Aerator mixes air with water to create a full, satisfying flow while using significantly less water. Perfect for kitchen sinks, it helps reduce water waste without sacrificing performance.",
            image: "https://images.unsplash.com/photo-1587271339318-2e78fdf79586?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            specs: {
                "Flow Rate": "1.0 GPM",
                "Thread Size": "Standard 15/16\"",
                "Water Saving": "40%",
                "Material": "Brass construction",
                "Installation": "Screw-on, no tools"
            }
        }
    };
    
    if (productId && products[productId]) {
        displayProductDetails(products[productId]);
    } else {
        // Redirect to products page if no valid product ID
        window.location.href = 'index.html#products';
    }
    
    // Add to cart functionality
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(document.querySelector('.quantity-input').value);
            alert(`Added ${quantity} item(s) to cart!`);
        });
    }
});

function displayProductDetails(product) {
    const container = document.getElementById('productContent');
    
    // Generate stars HTML
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(product.rating);
    
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) starsHTML += '★';
    if (hasHalfStar) starsHTML += '½';
    for (let i = 0; i < emptyStars; i++) starsHTML += '☆';
    
    // Generate specs HTML
    const specsHTML = Object.entries(product.specs).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key}</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="product-details-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details-info">
            <span class="product-category-large">${product.category}</span>
            <h1>${product.name}</h1>
            <div class="product-rating">
                <span class="stars">${starsHTML}</span>
                <span class="rating-count">(${product.reviews} reviews)</span>
            </div>
            <div class="product-price-large">$${product.price.toFixed(2)}</div>
            <p class="product-description-full">${product.fullDescription}</p>
            
            <div class="product-specs">
                <h3>Specifications</h3>
                <div class="specs-grid">
                    ${specsHTML}
                </div>
            </div>
            
            <div class="product-actions">
                <div class="quantity-selector">
                    <button class="quantity-btn minus">-</button>
                    <input type="number" class="quantity-input" value="1" min="1" max="10">
                    <button class="quantity-btn plus">+</button>
                </div>
                <button class="add-to-cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 2h16l-4 8H7l-4-8z" stroke="currentColor" stroke-width="2"/>
                        <circle cx="7" cy="19" r="2" stroke="currentColor" stroke-width="2"/>
                        <circle cx="17" cy="19" r="2" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    // Add quantity controls
    const minusBtn = container.querySelector('.quantity-btn.minus');
    const plusBtn = container.querySelector('.quantity-btn.plus');
    const quantityInput = container.querySelector('.quantity-input');
    
    minusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value < 10) {
            quantityInput.value = value + 1;
        }
    });
}