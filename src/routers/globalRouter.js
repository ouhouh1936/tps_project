import express from "express";
import { routers } from "../routers";
import { globalController } from "../controllers/globalController";
import dotenv from "dotenv";
dotenv.config();

const globalRouter = express.Router();

globalRouter.get(routers.HOME, globalController.homeController);

export default globalRouter;
