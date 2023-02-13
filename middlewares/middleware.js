import bestseller from "../schemas/bestsellerSchema.js";
import blog from "../schemas/blogSchema.js";
import trending from "../schemas/trendingSchema.js";
import product from "../schemas/productSchema.js";
import dealoftheday from "../schemas/dealofthedaySchema.js";
import cart from "../schemas/cartSchema.js";
import stripes from "stripe";
const stripe = stripes(
  "sk_test_51MZFiKLVQdY0Tl7LGOLHQs2ACVRU1fmfqTvwQgidI7wO12gLAkdSsRpo9RIxeFfdyqmrDeeG0H7GYRNi1JiPKoKJ00tMKb5fQR"
);

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

const cartSession = async (req, res) => {
  try {
    // const session = await stripe.checkout.sessions.create({
    //   line_items: [
    //     {
    //       price: `price_1MavfpLVQdY0Tl7LHRQTKYjN`,
    //       quantity: 3,
    //     },
    //   ],
    //   mode: "payment",
    //   // success_url: `http://localhost:5000?success=true`,
    //   // cancel_url: `http://localhost:5000?canceled=true`,
    // });
    // res.status(400).json({ msg: session.url });

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(400).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    console.log(e.message);
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
  cartSession,
];

export default middlewares;
