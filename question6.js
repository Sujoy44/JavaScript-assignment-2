const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
};

function printProductDetails(product) {
    console.log("Below are the product details.");
    console.log(`name : ${product.name}`);
    console.log(`price : ${product.price}`);
    console.log(`color : ${product.color}`);
    console.log(`hardDisk : ${product.hardDisk}`);
}

// Example usage:
printProductDetails(productDetails);
// OUTPUT:
// Below are the product details.
// name : Apple 2020 MacBook Air Laptop
// price : 82000
// color : Grey
// hardDisk : 256 GB
