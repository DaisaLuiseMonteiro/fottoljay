export declare class AuthService {
    /**
     * Register the first Super Admin user
     */
    static registerSuperAdmin(data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }): unknown;
    /**
     * Authenticate user and return token
     */
    static login(email: string, password: string): unknown;
    /**
     * Get current user info
     */
    static getCurrentUser(userId: string): unknown;
    /**
     * Update user profile (first name, last name)
     */
    static updateProfile(userId: string, data: {
        firstName: string;
        lastName: string;
    }): unknown;
    /**
     * Complete first login setup (update profile and change password)
     */
    static completeFirstLogin(userId: string, data: {
        firstName: string;
        lastName: string;
        newPassword: string;
    }): unknown;
    /**
     * Change user password
     */
    static changePassword(userId: string, currentPassword: string, newPassword: string): unknown;
}
//# sourceMappingURL=auth.service.d.ts.map