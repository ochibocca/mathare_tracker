

productSchema ={
    name: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
    },
    age: {
        type: string,
        required: true,
    }
}
const mongoose = require("mongoose");
const Product = mongoose.model("Product", productSchema);
module.exports = Product;