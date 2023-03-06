import { AppError } from "../../../../errors/AppError";
import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/Client";
import { ICreateUser } from "../../dtos";

export class CreateUserUseCase {
  async execute({ name, email }: ICreateUser): Promise<User> {
    // verificar se user existe
    const userExists = await prisma.user.findUnique({ where: { email } });

    if (userExists) {
      throw new AppError("User already exists");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
}
