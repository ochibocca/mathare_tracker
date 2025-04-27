

productSchema ={
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: SVGAElementtring,
        required: true,
    }
}
const mongoose = require("mongoose");
const Product = mongoose.model("Product", productSchema);
module.exports = Product;