// Sample data for demonstration
const cartItems = [
    { name: "Item 1", image: "item1.jpg" },
    { name: "Item 2", image: "item2.jpg" },
    { name: "Item 3", image: "item3.jpg" }
];

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Function to update total items count
function updateTotalItemsCount() {
    document.getElementById('totalItems').textContent = cartItems.length;
}

// Render initial cart items
renderCartItems();
updateTotalItemsCount();

// Event listener for order now button
document.getElementById('orderNow').addEventListener('click', function() {
    // Implement order functionality here
    alert('Order functionality coming soon!');
});

// Event listener for add to favorites button
document.getElementById('addToFavorites').addEventListener('click', function() {
    // Implement add to favorites functionality here
    alert('Add to favorites functionality coming soon!');
});
