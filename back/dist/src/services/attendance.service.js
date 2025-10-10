"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AttendanceService {
    async createAttendance(data) {
        return prisma.attendance.create({
            data: {
                employeeId: data.employeeId,
                checkInDateTime: data.checkInDateTime,
                checkOutDateTime: data.checkOutDateTime,
                status: data.status,
            },
            include: {
                employee: true,
            },
        });
    }
    async getAttendancesByCompany(companyId) {
        return prisma.attendance.findMany({
            where: {
                employee: {
                    companyId: companyId,
                },
            },
            include: {
                employee: true,
            },
            orderBy: {
                checkInDateTime: 'desc',
            },
        });
    }
    async getAttendanceById(id) {
        return prisma.attendance.findUnique({
            where: { id },
            include: {
                employee: true,
            },
        });
    }
    async updateAttendance(id, data) {
        return prisma.attendance.update({
            where: { id },
            data,
            include: {
                employee: true,
            },
        });
    }
    async deleteAttendance(id) {
        return prisma.attendance.delete({
            where: { id },
        });
    }
}
exports.AttendanceService = AttendanceService;
//# sourceMappingURL=attendance.service.js.map