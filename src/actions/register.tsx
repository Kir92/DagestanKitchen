"use server";
import { IFormData } from "@/types/form-data";
import { saltAndHashPassword } from "@/utils/password";
import prisma from "@/utils/prisma";
import { signUpSchema } from "@/schema/zod";
import { ZodError } from "zod";

export async function registerUser(formData: IFormData) {
  try {
    const { email, password } = await signUpSchema.parseAsync(formData);

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: "Пользователь с таким Email уже существует" };
    }

    const pwHash = await saltAndHashPassword(password);
    const user = await prisma.user.create({
      data: {
        email: email,
        password: pwHash,
      },
    });

    return { success: true, email: user.email };
  } catch (error) {
    if (error instanceof ZodError) {
      return { error: error.issues[0].message };
    }
    console.error("Ошибка регистрации:", error);
    return { error: "Ошибка при регистрации" };
  }
}