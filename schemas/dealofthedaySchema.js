import mongoose from "mongoose";

const dealofthedaySchema = mongoose.Schema({
  name: String,
  shortInfo: String,
  price: String,
  actualPrice: String,
  id: Number,
  image: String,
  sold: Number,
  available: Number,
});

const dealoftheday = mongoose.model(`dealoftheday`, dealofthedaySchema);

export default dealoftheday;
