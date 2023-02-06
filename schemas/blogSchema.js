import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: String,
  head: String,
  name: String,
  time: String,
  image: String,
  id: Number,
});

const blog = mongoose.model(`blog`, blogSchema);

export default blog;
