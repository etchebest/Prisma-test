import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/Client";

export class GetAllUsersUseCase {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany({
      orderBy: {
        created_at: "asc",
      },
      include: {
        Movierent: {
          select: {
            movie: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });
    return users;
  }
}
