import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import connect from "../db";
import morgan from "morgan";

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "/assets")));
connect();

app.get("/", (req, res) => {
  res.render("./layouts/main");
});
app.get("/login", (req, res) => {
  res.render("./screens/login");
});
app.get("/f_post", (req, res) => {
  res.render("./screens/f_post");
});

app.get("/home", (req, res) => {
  res.render("screens/home");
});

app.listen(PORT, () => {
  console.log(`🐶🐶🐶  ${PORT} SERVER START  🐶🐶🐶`);
});
