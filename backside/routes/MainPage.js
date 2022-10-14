import express from "express";
import catchAsyncErrors from "../lib/catchAsyncErrors.js";
import makeQuery from "../lib/make-query.js";

const route = express.Router();

// API call for get all Data

route.get(
  "/get_online_products",
  catchAsyncErrors(async (req, res) => {
    let result = await makeQuery("SELECT * FROM onlineProducts");
    res.send(result);
  })
);

route.post(
  "/save_into_cart",
  catchAsyncErrors(async (req, res) => {
    let { ProductId, title, price, image, description } = req.body;
    //clg
    console.log(req.body);
    let result = await makeQuery(
      `insert into Cart_Data(ProductId, title, price, image, description) values( ?, ?, ?, ?, ?)`,
      [ProductId, title, price, image, description]
    );
    res.send({ result });
  })
);
export default route;
