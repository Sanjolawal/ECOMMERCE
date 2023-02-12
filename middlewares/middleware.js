import bestseller from "../schemas/bestsellerSchema.js";
import blog from "../schemas/blogSchema.js";
import trending from "../schemas/trendingSchema.js";
import product from "../schemas/productSchema.js";
import dealoftheday from "../schemas/dealofthedaySchema.js";
import cart from "../schemas/cartSchema.js";

const bestsellers = async (req, res) => {
  try {
    const response = await bestseller.find({}).lean();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const products = async (req, res) => {
  try {
    const response = await product.find({}).lean();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const dealofthedays = async (req, res) => {
  try {
    const response = await dealoftheday.find({}).lean();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const trendings = async (req, res) => {
  try {
    const response = await trending.find({}).lean();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const blogs = async (req, res) => {
  try {
    const response = await blog.find({}).lean();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const carts = async (req, res) => {
  try {
    const data = req.body;
    const response = await cart.create(data);
    res.status(200).json({ msg: `created successfully` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const allCart = async (req, res) => {
  try {
    const response = await cart.find({}).lean();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deleteCart = async (req, res) => {
  try {
    const id = req.params.id;
    await cart.findByIdAndDelete(id);
    res.status(200).json({ msg: `deleted successfully` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deleteAllCart = async (req, res) => {
  try {
    await cart.deleteMany({});
    res.status(200).json({ msg: `deleted sucessfully` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const middlewares = [
  bestsellers,
  products,
  blogs,
  dealofthedays,
  trendings,
  carts,
  allCart,
  deleteCart,
  deleteAllCart,
];

export default middlewares;
