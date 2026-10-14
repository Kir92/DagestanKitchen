import { PrismaClient } from "../src/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("123456", 10);

  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: { password },
    create: {
      email: "test@test.com",
      password,
    },
  });

  console.log("Создан пользователь:", user.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });