import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  purpose: String,
  writeUp: String,
  price: String,
  actualPrice: String,
  image: String,
  id: Number,
});

const product = mongoose.model(`product`, productSchema);

export default product;
