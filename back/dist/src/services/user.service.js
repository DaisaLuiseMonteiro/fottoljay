"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const password_util_1 = require("../utils/password.util");
const prisma = new client_1.PrismaClient();
class UserService {
    /**
     * Create a user for a company
     */
    static async createUserForCompany(companyId, data) {
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        });
        if (existingUser) {
            throw new Error('Email already exists');
        }
        if (data.role !== client_1.UserRole.ADMIN) {
            throw new Error('Invalid role for company user');
        }
        const passwordToHash = data.password || 'pass';
        const hashedPassword = await password_util_1.PasswordUtil.hash(passwordToHash);
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                role: data.role,
                companyId: companyId,
                forcePasswordChange: !data.password,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                forcePasswordChange: true,
                createdAt: true,
            },
        });
        return user;
    }
    /**
     * Get users for a company
     */
    static async getUsersForCompany(companyId, filters) {
        const where = { companyId };
        if (filters === null || filters === void 0 ? void 0 : filters.role) {
            where.role = filters.role;
        }
        if ((filters === null || filters === void 0 ? void 0 : filters.isActive) !== undefined) {
            where.isActive = filters.isActive;
        }
        const users = await prisma.user.findMany({
            where,
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        return users;
    }
    static async updateUser(userId, data) {
        const user = await prisma.user.update({
            where: { id: userId },
            data,
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                updatedAt: true,
            },
        });
        return user;
    }
    static async deleteUser(userId) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new Error('User not found');
        }
        await prisma.user.delete({
            where: { id: userId },
        });
        return { message: 'User deleted successfully' };
    }
    /**
     * Get all users (Super Admin only)
     */
    static async getAllUsers(filters) {
        const where = {};
        if (filters === null || filters === void 0 ? void 0 : filters.role) {
            where.role = filters.role;
        }
        if ((filters === null || filters === void 0 ? void 0 : filters.isActive) !== undefined) {
            where.isActive = filters.isActive;
        }
        const users = await prisma.user.findMany({
            where,
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                company: {
                    select: {
                        name: true,
                    },
                },
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        return users;
    }
    /**
     * Get user by ID
     */
    static async getUserById(userId) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                company: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                createdAt: true,
            },
        });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map