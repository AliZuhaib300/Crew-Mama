import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import errorMiddleware from "./lib/error.js";
import MainPage from "./routes/MainPage.js";
import CartData from "./routes/CartData.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", MainPage);
app.use("/api/cart", MainPage);
app.use("/api", CartData);
app.use("/api/delete", CartData);
app.use("/api/numbers", CartData);
app.use(errorMiddleware);

const port = process.env.PORT || 6060;
app.listen(port, () => console.log(`Listening on port ${port}..`));
