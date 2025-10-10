import { PrismaClient } from '@prisma/client';
import { PasswordUtil } from '../src/utils/password.util';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await PasswordUtil.hash('passer');

  // Create super admin user
  await prisma.user.create({
    data: {
      email: 'Daisa@gmail.com',
      password: hashedPassword,
      firstName: 'Daisa',
      lastName: 'Admin',
      role: 'SUPER_ADMIN' as any,
    },
  });

  console.log('Super admin user created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });