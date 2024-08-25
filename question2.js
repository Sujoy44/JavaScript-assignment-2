function calculateTotalCartValue(...prices) {
    const total = prices.reduce((sum, price) => sum + price, 0);
    console.log(`The total cart value is ${total}`);
    return total;
}

// Example usage:
calculateTotalCartValue(125, 20, 30); // OUTPUT: The total cart value is 175
