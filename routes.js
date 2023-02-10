import express from "express";
const router = express.Router();
import middlewares from "./middlewares/middleware.js";
const [bestsellers, products, blogs, dealofthedays, trendings, carts, allCart] =
  middlewares;

router.get(`/api/bestseller`, bestsellers);
router.get(`/api/product`, products);
router.get(`/api/blog`, blogs);
router.get(`/api/dealoftheday`, dealofthedays);
router.get(`/api/trending`, trendings);
router.route(`/api/cart`).post(carts).get(allCart);

export default router;
