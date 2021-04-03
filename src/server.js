import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import connect from "../db";
import globalRouter from "../src/routers/globalRouter";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} $ERVER START😙`);
});
