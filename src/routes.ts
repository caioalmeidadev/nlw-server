import { Router } from "express";
import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

routes.get("/items", ItemsController.index);

routes.post("/points", PointsController.create);
routes.get("/points", PointsController.index);
routes.get("/points/:id", PointsController.show);

export default routes;
