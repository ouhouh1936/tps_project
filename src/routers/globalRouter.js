import express from "express";
import { routers } from "../routers";
import { globalController } from "../controllers/globalController";


const globalRouter = express.Router();

globalRouter.get(routers.HOME, globalController.homeController);
globalRouter.get(routers.MY, globalController.myController);
globalRouter.get(routers.F_POST, globalController.f_postController);
globalRouter.get(routers.FRIEND, globalController.friendController);
globalRouter.get(routers.SIGNIN, globalController.singnInController);
globalRouter.get(routers.SIGNUP, globalController.signupController);
globalRouter.get(routers.HEADER, globalController.mainController);
globalRouter.get(routers.PRIVACY, globalController.privacyController);


globalRouter.get(routers.H_POST, globalController.h_postController);


export default globalRouter;
