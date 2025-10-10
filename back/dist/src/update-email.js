"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const central_1 = require("../generated/central");
const prisma = new central_1.PrismaClient();
async function updateEmail() {
    await prisma.user.updateMany({
        where: { email: 'daisa@ghmail.com' },
        data: { email: 'daisa@gmail.com' },
    });
    console.log('Email updated');
    await prisma.$disconnect();
}
updateEmail().catch(console.error);
//# sourceMappingURL=update-email.js.map