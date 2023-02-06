import bestseller from "../schemas/bestsellerSchema.js";
import blog from "../schemas/blogSchema.js";
import trending from "../schemas/trendingSchema.js";
import product from "../schemas/productSchema.js";
import dealoftheday from "../schemas/dealofthedaySchema.js";

const bestsellers = async (req, res) => {
  try {
    const response = await bestseller.find({}).lean();
    res.status(400).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const products = async (req, res) => {
  try {
    const response = await product.find({}).lean();
    res.status(400).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const dealofthedays = async (req, res) => {
  try {
    const response = await dealoftheday.find({}).lean();
    res.status(400).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const trendings = async (req, res) => {
  try {
    const response = await trending.find({}).lean();
    res.status(400).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const blogs = async (req, res) => {
  try {
    const response = await blog.find({}).lean();
    res.status(400).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const middlewares = [bestsellers, products, blogs, dealofthedays, trendings];

export default middlewares;
