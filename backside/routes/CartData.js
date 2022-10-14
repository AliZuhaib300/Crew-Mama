import express from "express";
import catchAsyncErrors from "../lib/catchAsyncErrors.js";
import makeQuery from "../lib/make-query.js";

const route = express.Router();

route.get(
  "/selected_products",
  catchAsyncErrors(async (req, res) => {
    let result = await makeQuery("SELECT * FROM Cart_Data");
    res.send(result);
  })
);

route.get(
  "/total_products",
  catchAsyncErrors(async (req, res) => {
    let result = await makeQuery(
      "SELECT COUNT(Cart_Id) as count FROM Cart_Data"
    );
    res.send(result);
  })
);

route.delete(
  `/product_by_id`,
  catchAsyncErrors(async (req, res) => {
    let { cartId } = req.query;

    await makeQuery(`delete from Cart_Data where Cart_Id = ?`, [cartId]);
    res.send({ message: `product with id deleted successfully` });
  })
);

export default route;
