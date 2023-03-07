import { GetAllUsersController } from "./../modules/users/useCases/getAllUsers/GetaAllUsersController";
import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

const createUserControler = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserControler.handle);
userRoutes.get("/", getAllUsersController.handle);

export { userRoutes };
