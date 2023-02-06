import mongoose from "mongoose";

const trendingSchema = mongoose.Schema({
  name: String,
  purpose: String,
  writeUp: String,
  price: String,
  actualPrice: String,
  id: Number,
  image: String,
});

const trending = mongoose.model(`trending`, trendingSchema);

export default trending;
