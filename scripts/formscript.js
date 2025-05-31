// Product array
const products = [
    { id: 'product1', name: 'Product 1' },
    { id: 'product2', name: 'Product 2' },
    { id: 'product3', name: 'Product 3' },
];

// Populate the product select options
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Get the current year and set it in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date and set it in the footer
document.getElementById('lastModified').textContent = document.lastModified;
