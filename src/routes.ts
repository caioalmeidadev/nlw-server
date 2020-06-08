import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = Router();
const upload = multer(multerConfig);

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

routes.get("/items", ItemsController.index);

routes.post("/points", upload.single("image"), PointsController.create);

routes.get("/points", PointsController.index);
routes.get("/points/:id", PointsController.show);

export default routes;
