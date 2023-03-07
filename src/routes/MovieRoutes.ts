import { GetMovieByReleaseController } from "./../modules/movies/movieCases/getMovie/GetMovieByReleaseController";
import { CreateMovieRentController } from "./../modules/movies/movieCases/createMovieRent/CreateMovieRentController";
import { CreateMovieController } from "../modules/movies/movieCases/createMovie/CreateMovieController";
import { Router } from "express";

const createMovieControler = new CreateMovieController();
const createMovieRentControler = new CreateMovieRentController();
const getMovieByReleaseController = new GetMovieByReleaseController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieControler.handle);
movieRoutes.post("/rent", createMovieRentControler.handle);
movieRoutes.get("/release", getMovieByReleaseController.handle);

export { movieRoutes };
