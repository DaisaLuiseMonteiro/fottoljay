import { Request, Response } from 'express';
export declare class UserController {
    /**
     * Create a user for a company
     */
    static createUserForCompany(req: Request, res: Response): any;
    /**
     * Get users for a company
     */
    static getUsersForCompany(req: Request, res: Response): any;
    /**
     * Update user
     */
    static updateUser(req: Request, res: Response): any;
    /**
     * Delete user
     */
    static deleteUser(req: Request, res: Response): any;
    /**
      * Get all users (Super Admin only)
      */
    static getAllUsers(req: Request, res: Response): unknown;
    /**
     * Get user by ID
     */
    static getUserById(req: Request, res: Response): any;
}
export declare const userValidation: {
    createUserForCompany: {};
    updateUser: {};
};
//# sourceMappingURL=user.controller.d.ts.map