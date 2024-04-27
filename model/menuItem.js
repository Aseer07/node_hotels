const mongoose = require("mongoose");

const menuItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const menuItem = mongoose.model("menuItem", menuItemSchema);
module.exports = menuItem;
