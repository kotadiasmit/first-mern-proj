import express, { request } from "express";
import mongoose from "mongoose";
import routes from "./route/index.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.ports || 2000 || 2001;

mongoose
  .connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect To MongoDB Database");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
app.use(express.json());
app.use(cors());
app.use("/", routes);
