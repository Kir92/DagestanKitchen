import bcrypt from 'bcryptjs';

const saltRounds = 10;

export async function saltAndHashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, saltRounds);
}

//export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
 // return await bcrypt.compare(password, hashedPassword);                                                        //верификация пока не нужна
//}