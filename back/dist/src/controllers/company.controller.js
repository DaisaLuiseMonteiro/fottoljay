"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyValidation = exports.CompanyController = void 0;
const express_validator_1 = require("express-validator");
const company_service_1 = require("../services/company.service");
const employee_service_1 = require("../services/employee.service");
class CompanyController {
    /**
     * Create a new company
     */
    static async createCompany(req, res) {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: 'Validation failed', details: errors.array() });
            }
            if (!req.file) {
                return res.status(400).json({ error: 'Le logo est obligatoire' });
            }
            const data = Object.assign(Object.assign({}, req.body), { logo: req.file ? `/logos/${req.file.filename}` : undefined });
            const company = await company_service_1.CompanyService.createCompany(data);
            res.status(201).json({
                message: 'Company created successfully',
                company,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Get companies
     */
    static async getCompanies(req, res) {
        try {
            if (!req.user) {
                return res.status(401).json({ error: 'Not authenticated' });
            }
            if (req.user.role !== 'SUPER_ADMIN') {
                return res.status(403).json({ error: 'Access denied - SUPER_ADMIN required' });
            }
            const { role } = req.query;
            const filters = {};
            if (role)
                filters.role = role;
            const companies = await company_service_1.CompanyService.getCompanies(req.user.role, req.user.companyId, filters);
            res.json({ companies });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Get company by ID
     */
    static async getCompanyById(req, res) {
        try {
            const { id } = req.params;
            const company = await company_service_1.CompanyService.getCompanyById(id);
            res.json({ company });
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    /**
     * Get current user's company
     */
    static async getMyCompany(req, res) {
        var _a, _b;
        try {
            console.log('getMyCompany called for user:', req.user);
            console.log('User companyId:', (_a = req.user) === null || _a === void 0 ? void 0 : _a.companyId);
            if (!((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId)) {
                console.log('User has no companyId assigned');
                return res.status(400).json({ error: 'User is not assigned to any company' });
            }
            console.log('Fetching company with ID:', req.user.companyId);
            const company = await company_service_1.CompanyService.getCompanyById(req.user.companyId);
            console.log('Company found:', company.name);
            res.json({ company });
        }
        catch (error) {
            console.log('Error in getMyCompany:', error.message);
            res.status(404).json({ error: error.message });
        }
    }
    /**
     * Update company
     */
    static async updateCompany(req, res) {
        try {
            const { id } = req.params;
            const data = Object.assign(Object.assign({}, req.body), { logo: req.file ? `/logos/${req.file.filename}` : req.body.logo });
            console.log('Update company data:', data);
            console.log('Uploaded file:', req.file);
            console.log('Existing logo from body:', req.body.logo);
            const company = await company_service_1.CompanyService.updateCompany(id, data);
            res.json({
                message: 'Company updated successfully',
                company,
            });
        }
        catch (error) {
            console.error('Error updating company:', error);
            res.status(500).json({ error: error.message });
        }
    }
    /**
     * Toggle company active status
     */
    static async toggleCompanyStatus(req, res) {
        try {
            const { id } = req.params;
            const company = await company_service_1.CompanyService.toggleCompanyStatus(id);
            res.json({
                message: `Company ${company.isActive ? 'activated' : 'deactivated'} successfully`,
                company,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Delete company
     */
    static async deleteCompany(req, res) {
        try {
            const { id } = req.params;
            const result = await company_service_1.CompanyService.deleteCompany(id);
            res.json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Create employee for company
     */
    static async createEmployee(req, res) {
        try {
            const { id } = req.params;
            console.log('Creating employee for company:', id, 'with data:', req.body);
            const employee = await company_service_1.CompanyService.createEmployee(id, req.body);
            console.log('Employee created successfully:', employee);
            // Ensure payroll mass is updated
            await employee_service_1.EmployeeService.updateCompanyPayrollMass(id);
            console.log('Payroll mass updated after employee creation');
            res.status(201).json({
                message: 'Employee created successfully',
                employee,
            });
        }
        catch (error) {
            console.error('Error creating employee:', error);
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Get employees by company ID
     */
    static async getEmployeesByCompanyId(req, res) {
        var _a, _b, _c;
        try {
            const { id } = req.params;
            console.log('Getting employees for company:', id);
            console.log('User making request:', (_a = req.user) === null || _a === void 0 ? void 0 : _a.email, 'role:', (_b = req.user) === null || _b === void 0 ? void 0 : _b.role, 'companyId:', (_c = req.user) === null || _c === void 0 ? void 0 : _c.companyId);
            const employees = await company_service_1.CompanyService.getEmployeesByCompanyId(id);
            console.log(`Found ${employees.length} employees for company ${id}`);
            console.log('Employee details:', employees.map(e => ({ id: e.id, name: e.fullName })));
            res.json({ employees });
        }
        catch (error) {
            console.error('Error getting employees:', error);
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Get all employees
     */
    static async getAllEmployees(req, res) {
        try {
            const employees = await company_service_1.CompanyService.getAllEmployees();
            res.json({ employees });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Synchroniser la masse salariale d'une entreprise
     */
    static async syncPayrollMass(req, res) {
        try {
            if (!req.user) {
                return res.status(401).json({ error: 'Not authenticated' });
            }
            if (req.user.role !== 'SUPER_ADMIN') {
                return res.status(403).json({ error: 'Access denied - SUPER_ADMIN required' });
            }
            const { id } = req.params;
            const result = await company_service_1.CompanyService.syncPayrollMass(id);
            res.json({
                message: 'Masse salariale synchronisée avec succès',
                result,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Vérifier et corriger les masses salariales
     */
    static async verifyPayrollMasses(req, res) {
        try {
            if (!req.user) {
                return res.status(401).json({ error: 'Not authenticated' });
            }
            if (req.user.role !== 'SUPER_ADMIN') {
                return res.status(403).json({ error: 'Access denied - SUPER_ADMIN required' });
            }
            const results = await company_service_1.CompanyService.verifyAndUpdateAllPayrollMasses();
            res.json({
                message: 'Vérification des masses salariales terminée',
                results,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Get dashboard stats
     */
    static async getStats(req, res) {
        try {
            const stats = await company_service_1.CompanyService.getStats();
            res.json({ stats });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
exports.CompanyController = CompanyController;
exports.companyValidation = {
    createCompany: [
        (0, express_validator_1.body)('name').trim().isLength({ min: 1 }).withMessage('Le nom de l\'entreprise est requis'),
        (0, express_validator_1.body)('email').optional().isEmail().normalizeEmail().withMessage('L\'email doit être valide (ex: contact@example.com)'),
        (0, express_validator_1.body)('phone').optional().matches(/^(77|78|70|76|75)\d{7}$/).withMessage('Le numéro de téléphone doit être au format sénégalais valide (ex: 771234567)'),
        (0, express_validator_1.body)('website').optional().isLength({ min: 3 }).withMessage('Le site web doit contenir au moins 3 caractères'),
        (0, express_validator_1.body)('address').optional().isLength({ min: 2 }).withMessage('L\'adresse doit contenir au moins 2 caractères'),
        (0, express_validator_1.body)('adminEmail').isEmail().normalizeEmail().withMessage('L\'email de l\'admin doit être valide (ex: admin@example.com)'),
    ],
    createEmployee: [
        (0, express_validator_1.body)('fullName').trim().isLength({ min: 1 }).withMessage('Le nom complet est requis'),
        (0, express_validator_1.body)('position').trim().isLength({ min: 1 }).withMessage('Le poste est requis'),
        (0, express_validator_1.body)('contractType').isIn(['DAILY', 'FIXED', 'CONTRACTOR']).withMessage('Type de contrat invalide'),
        (0, express_validator_1.body)('salaryRate').custom((value) => {
            const num = parseFloat(value);
            if (isNaN(num) || num < 0)
                throw new Error('Le taux salarial doit être un nombre positif');
            return true;
        }),
        (0, express_validator_1.body)('phone').optional().matches(/^(77|78|70|76|75)\d{7}$/).withMessage('Le numéro de téléphone doit être au format sénégalais valide'),
        (0, express_validator_1.body)('email').optional().trim().normalizeEmail(),
        (0, express_validator_1.body)('address').optional().trim(),
    ],
    updateCompany: [
        (0, express_validator_1.body)('name').trim().isLength({ min: 1 }).withMessage('Le nom de l\'entreprise est requis'),
        (0, express_validator_1.body)('email').optional({ checkFalsy: true }).isEmail().normalizeEmail().withMessage('L\'email doit être valide (ex: contact@example.com)'),
        (0, express_validator_1.body)('phone').optional({ checkFalsy: true }).matches(/^(77|78|70|76|75)\d{7}$/).withMessage('Le numéro de téléphone doit être au format sénégalais valide (ex: 771234567)'),
        (0, express_validator_1.body)('website').optional({ checkFalsy: true }).isLength({ min: 3 }).withMessage('Le site web doit contenir au moins 3 caractères'),
        (0, express_validator_1.body)('address').optional({ checkFalsy: true }).isLength({ min: 2 }).withMessage('L\'adresse doit contenir au moins 2 caractères'),
    ],
};
//# sourceMappingURL=company.controller.js.map