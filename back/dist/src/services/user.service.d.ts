import { UserRole } from '@prisma/client';
export declare class UserService {
    /**
     * Create a user for a company
     */
    static createUserForCompany(companyId: string, data: {
        email: string;
        password?: string;
        firstName: string;
        lastName: string;
        role: UserRole;
    }): unknown;
    /**
     * Get users for a company
     */
    static getUsersForCompany(companyId: string, filters?: {
        role?: UserRole;
        isActive?: boolean;
    }): unknown;
    static updateUser(userId: string, data: {
        firstName?: string;
        lastName?: string;
        role?: UserRole;
        isActive?: boolean;
    }): unknown;
    static deleteUser(userId: string): unknown;
    /**
     * Get all users (Super Admin only)
     */
    static getAllUsers(filters?: {
        role?: UserRole;
        isActive?: boolean;
    }): unknown;
    /**
     * Get user by ID
     */
    static getUserById(userId: string): unknown;
}
//# sourceMappingURL=user.service.d.ts.map