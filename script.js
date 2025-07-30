
let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.product} - Ksh ${item.price}`;
        const btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.onclick = () => removeFromCart(index);
        li.appendChild(btn);
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert('Checkout complete! We will contact you shortly.');
    cart = [];
    updateCart();
}
