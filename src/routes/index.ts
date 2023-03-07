import { Router } from "express";
import { userRoutes } from "./UserRoutes";
import { movieRoutes } from "./MovieRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);

export { routes };
