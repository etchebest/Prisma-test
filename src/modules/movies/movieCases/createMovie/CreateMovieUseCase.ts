import { AppError } from "../../../../errors/AppError";
import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/Client";
import { ICreateMovie } from "../../dtos";

export class CreateMovieUseCase {
  async execute({
    title,
    duration,
    release_date,
  }: ICreateMovie): Promise<Movie> {
    // verificar se o filme existe
    const movieExists = await prisma.movie.findUnique({ where: { title } });

    if (movieExists) {
      throw new AppError("Movie already exists");
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date,
      },
    });

    return movie;
  }
}
