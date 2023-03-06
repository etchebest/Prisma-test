import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUser.controller";

const createUserControler = new CreateUserController();

const userRoutes = Router();

userRoutes.post("/", createUserControler.handle);

export { userRoutes };
