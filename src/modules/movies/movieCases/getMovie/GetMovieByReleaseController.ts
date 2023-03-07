import { Request, Response } from "express";
import { GetMovieByReleaseUseCase } from "./GetMovieByReleaseUseCase";

export class GetMovieByReleaseController {
  async handle(req: Request, res: Response) {
    const getMovieByReleaseUseCase = new GetMovieByReleaseUseCase();

    const result = await getMovieByReleaseUseCase.execute();

    return res.status(201).json(result);
  }
}
