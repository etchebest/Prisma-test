import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/Client";
import { ICreateMovieRent } from "./../../dtos/CreateMovieRent.interface";
export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: ICreateMovieRent): Promise<void> {
    const movieExist = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movieExist) {
      throw new AppError("Movie does not exists!");
    }

    const movieRented = await prisma.movierent.findFirst({
      where: {
        movieId,
      },
    });

    if (movieRented) {
      throw new AppError("Movie already rented!");
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exists!");
    }

    await prisma.movierent.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
