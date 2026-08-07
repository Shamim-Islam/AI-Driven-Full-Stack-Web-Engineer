
// Receipt Generator
let generateReceipt = (customerName, items, total) => {
    // validation
    if(!Array.isArray(items) || items.length === 0) {
        return 'Invalid';
    }

    return `Receipt for ${customerName} Items: ${items} Total: ৳${total}`
}

console.log(generateReceipt("Rakib", ["Pen", "Book"], 150))
console.log(generateReceipt("Sadia", ["Milk"], 60))
console.log(generateReceipt("Tanvir", [], 0))