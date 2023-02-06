import mongoose from "mongoose";

const bestsellerSchema = mongoose.Schema({
  name: String,
  writeUp: String,
  price: String,
  actualPrice: String,
  id: Number,
  image: String,
});

const bestseller = mongoose.model(`bestseller`, bestsellerSchema);

export default bestseller;
