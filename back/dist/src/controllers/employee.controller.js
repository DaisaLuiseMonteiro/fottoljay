"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeValidation = exports.EmployeeController = void 0;
const express_validator_1 = require("express-validator");
const employee_service_1 = require("../services/employee.service");
class EmployeeController {
    /**
     * Create a new employee
     */
    static async createEmployee(req, res) {
        try {
            const employee = await employee_service_1.EmployeeService.createEmployee(req.body);
            res.status(201).json({
                message: 'Employee created successfully',
                employee,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Get employees by company ID
     */
    static async getEmployeesByCompanyId(req, res) {
        try {
            const { companyId } = req.params;
            const employees = await employee_service_1.EmployeeService.getEmployeesByCompanyId(companyId);
            res.json({ employees });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Get employee by ID
     */
    static async getEmployeeById(req, res) {
        try {
            const { id } = req.params;
            const employee = await employee_service_1.EmployeeService.getEmployeeById(id);
            res.json({ employee });
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    /**
     * Update employee
     */
    static async updateEmployee(req, res) {
        try {
            const { id } = req.params;
            const employee = await employee_service_1.EmployeeService.updateEmployee(id, req.body);
            res.json({
                message: 'Employee updated successfully',
                employee,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Delete employee
     */
    static async deleteEmployee(req, res) {
        try {
            const { id } = req.params;
            const result = await employee_service_1.EmployeeService.deleteEmployee(id);
            res.json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Toggle employee active status
     */
    static async toggleEmployeeStatus(req, res) {
        try {
            const { id } = req.params;
            const employee = await employee_service_1.EmployeeService.toggleEmployeeStatus(id);
            res.json({
                message: `Employee ${employee.isActive ? 'activated' : 'deactivated'} successfully`,
                employee,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
exports.EmployeeController = EmployeeController;
exports.employeeValidation = {
    createEmployee: [
        (0, express_validator_1.body)('companyId').isUUID().withMessage('ID de l\'entreprise invalide'),
        (0, express_validator_1.body)('fullName').trim().isLength({ min: 1 }).withMessage('Le nom complet est requis'),
        (0, express_validator_1.body)('position').trim().isLength({ min: 1 }).withMessage('Le poste est requis'),
        (0, express_validator_1.body)('contractType').isIn(['DAILY', 'FIXED', 'CONTRACTOR']).withMessage('Type de contrat invalide'),
        (0, express_validator_1.body)('salaryRate').isFloat({ min: 0 }).withMessage('Le taux salarial doit être positif'),
        (0, express_validator_1.body)('email').optional().isEmail().normalizeEmail().withMessage('L\'email doit être valide'),
        (0, express_validator_1.body)('phone').optional().isMobilePhone('any').withMessage('Le numéro de téléphone doit être valide'),
        (0, express_validator_1.body)('bankName').optional().trim().isLength({ min: 0 }),
        (0, express_validator_1.body)('accountNumber').optional().trim().isLength({ min: 0 }),
        (0, express_validator_1.body)('accountHolderName').optional().trim().isLength({ min: 0 }),
    ],
    updateEmployee: [
        (0, express_validator_1.body)('fullName').optional().trim().isLength({ min: 1 }).withMessage('Le nom complet est requis'),
        (0, express_validator_1.body)('position').optional().trim().isLength({ min: 1 }).withMessage('Le poste est requis'),
        (0, express_validator_1.body)('contractType').optional().isIn(['DAILY', 'FIXED', 'CONTRACTOR']).withMessage('Type de contrat invalide'),
        (0, express_validator_1.body)('salaryRate').optional().isFloat({ min: 0 }).withMessage('Le taux salarial doit être positif'),
        (0, express_validator_1.body)('email').optional().isEmail().normalizeEmail().withMessage('L\'email doit être valide'),
        (0, express_validator_1.body)('phone').optional().isMobilePhone('any').withMessage('Le numéro de téléphone doit être valide'),
        (0, express_validator_1.body)('bankName').optional().trim().isLength({ min: 1 }).withMessage('Le nom de la banque est requis'),
        (0, express_validator_1.body)('accountNumber').optional().trim().isLength({ min: 1 }).withMessage('Le numéro de compte est requis'),
        (0, express_validator_1.body)('accountHolderName').optional().trim().isLength({ min: 1 }).withMessage('Le nom du titulaire est requis'),
        (0, express_validator_1.body)('isActive').optional().isBoolean(),
    ],
};
//# sourceMappingURL=employee.controller.js.map