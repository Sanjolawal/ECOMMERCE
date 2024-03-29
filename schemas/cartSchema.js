import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  name: String,
  price: String,
  count: Number,
  image: String,
  total: Number,
});

const cart = mongoose.model(`cart`, cartSchema);

export default cart;
