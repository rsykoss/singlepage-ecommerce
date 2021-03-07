const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    lowercase: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    lowercase: true
  }
})

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;