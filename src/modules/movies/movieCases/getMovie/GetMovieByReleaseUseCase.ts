import { prisma } from "./../../../../prisma/Client";
import { Movie } from "@prisma/client";

export class GetMovieByReleaseUseCase {
  async execute(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      orderBy: {
        release_date: "desc",
      },
      include: {
        Movierent: {
          select: {
            user: { select: { name: true, email: true } },
          },
        },
      },
    });

    return movies;
  }
}
