import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

function main() {
  const hashedPassword = bcrypt.hashSync('passer', 12);

  // Create admin user
  prisma.user.create({
    data: {
      email: 'ibou@gmail.com',
      password: hashedPassword,
      firstName: 'Ibou',
      lastName: 'Admin',
      role: UserRole.ADMIN,
    },
  } as any).then(() => {
    console.log('Admin user created successfully');
    prisma.$disconnect();
  }).catch((e: any) => {
    console.error(e);
    process.exit(1);
  });
}

main();