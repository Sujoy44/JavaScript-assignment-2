const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 2000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
];

function findMaxMinProduct(products) {
    let maxProduct = products[0];
    let minProduct = products[0];

    products.forEach(product => {
        if (product.price > maxProduct.price) {
            maxProduct = product;
        }
        if (product.price < minProduct.price) {
            minProduct = product;
        }
    });

    console.log(`The product with maximum amount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`);
    console.log(`The product with minimum amount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`);
}

// Example usage:
findMaxMinProduct(products);
// OUTPUT:
// The product with maximum amount is Laptop which is priced at Rs. 120000
// The product with minimum amount is Mobile Charger which is priced at Rs. 1500
