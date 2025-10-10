"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const password_util_1 = require("../src/utils/password.util");
const prisma = new client_1.PrismaClient();
async function main() {
    const hashedPassword = await password_util_1.PasswordUtil.hash('passer');
    // Create super admin user
    await prisma.user.create({
        data: {
            email: 'Daisa@gmail.com',
            password: hashedPassword,
            firstName: 'Daisa',
            lastName: 'Admin',
            role: 'SUPER_ADMIN',
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
//# sourceMappingURL=seed.js.map