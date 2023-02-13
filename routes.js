import express from "express";
const router = express.Router();
import middlewares from "./middlewares/middleware.js";
const [
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
] = middlewares;

router.get(`/api/bestseller`, bestsellers);
router.get(`/api/product`, products);
router.get(`/api/blog`, blogs);
router.get(`/api/dealoftheday`, dealofthedays);
router.get(`/api/trending`, trendings);
router.route(`/api/cart`).post(carts).get(allCart).delete(deleteAllCart);
router.route(`/api/cart/:id`).delete(deleteCart);
router.route("/create-payment-intent").post(cartSession);

export default router;
