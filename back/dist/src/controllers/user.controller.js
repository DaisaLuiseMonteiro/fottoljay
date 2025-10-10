"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = exports.UserController = void 0;
const express_validator_1 = require("express-validator");
const user_service_1 = require("../services/user.service");
class UserController {
    /**
     * Create a user for a company
     */
    static async createUserForCompany(req, res) {
        try {
            const { companyId } = req.params;
            const user = await user_service_1.UserService.createUserForCompany(companyId, req.body);
            res.status(201).json({
                message: 'User created successfully',
                user,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Get users for a company
     */
    static async getUsersForCompany(req, res) {
        try {
            const { companyId } = req.params;
            const { role, isActive } = req.query;
            const filters = {};
            if (role)
                filters.role = role;
            if (isActive !== undefined)
                filters.isActive = isActive === 'true';
            const users = await user_service_1.UserService.getUsersForCompany(companyId, filters);
            res.json({ users });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Update user
     */
    static async updateUser(req, res) {
        try {
            const { id } = req.params;
            const user = await user_service_1.UserService.updateUser(id, req.body);
            res.json({
                message: 'User updated successfully',
                user,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Delete user
     */
    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const result = await user_service_1.UserService.deleteUser(id);
            res.json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
      * Get all users (Super Admin only)
      */
    static async getAllUsers(req, res) {
        try {
            if (!req.user) {
                return res.status(401).json({ error: 'Not authenticated' });
            }
            if (req.user.role !== 'SUPER_ADMIN') {
                return res.status(403).json({ error: 'Access denied - SUPER_ADMIN required' });
            }
            const { role, isActive } = req.query;
            const filters = {};
            if (role)
                filters.role = role;
            if (isActive !== undefined)
                filters.isActive = isActive === 'true';
            const users = await user_service_1.UserService.getAllUsers(filters);
            res.json({ users });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Get user by ID
     */
    static async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await user_service_1.UserService.getUserById(id);
            res.json({ user });
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}
exports.UserController = UserController;
exports.userValidation = {
    createUserForCompany: [
        (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
        (0, express_validator_1.body)('password').optional().isLength({ min: 6 }),
        (0, express_validator_1.body)('firstName').trim().isLength({ min: 1 }),
        (0, express_validator_1.body)('lastName').trim().isLength({ min: 1 }),
        (0, express_validator_1.body)('role').isIn(['ADMIN']),
    ],
    updateUser: [
        (0, express_validator_1.body)('firstName').optional().trim().isLength({ min: 1 }),
        (0, express_validator_1.body)('lastName').optional().trim().isLength({ min: 1 }),
        (0, express_validator_1.body)('role').optional().isIn(['ADMIN']),
        (0, express_validator_1.body)('isActive').optional().isBoolean(),
    ],
};
//# sourceMappingURL=user.controller.js.map