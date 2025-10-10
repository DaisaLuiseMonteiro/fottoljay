"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const company_controller_1 = require("../controllers/company.controller");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const rbac_middleware_1 = require("../middlewares/rbac.middleware");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/logos');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
    }
});
const upload = (0, multer_1.default)({ storage, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB limit
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
router.post('/', rbac_middleware_1.requireSuperAdmin, upload.single('logo'), company_controller_1.companyValidation.createCompany, validation_middleware_1.handleValidationErrors, company_controller_1.CompanyController.createCompany);
router.get('/', rbac_middleware_1.requireSuperAdmin, company_controller_1.CompanyController.getCompanies);
router.post('/:id/employees', rbac_middleware_1.requireCompanyAdmin, company_controller_1.companyValidation.createEmployee, validation_middleware_1.handleValidationErrors, company_controller_1.CompanyController.createEmployee);
router.get('/:id/employees', rbac_middleware_1.requireCompanyAccess, company_controller_1.CompanyController.getEmployeesByCompanyId);
router.get('/employees', rbac_middleware_1.requireSuperAdmin, company_controller_1.CompanyController.getAllEmployees);
router.get('/stats', rbac_middleware_1.requireSuperAdmin, company_controller_1.CompanyController.getStats);
router.post('/verify-payroll-masses', rbac_middleware_1.requireSuperAdmin, company_controller_1.CompanyController.verifyPayrollMasses);
router.get('/:id', rbac_middleware_1.requireCompanyAccess, company_controller_1.CompanyController.getCompanyById);
router.get('/my-company', rbac_middleware_1.requireCompanyAccess, company_controller_1.CompanyController.getMyCompany);
router.put('/:id', rbac_middleware_1.requireAdmin, rbac_middleware_1.requireCompanyAccess, upload.single('logo'), company_controller_1.companyValidation.updateCompany, validation_middleware_1.handleValidationErrors, company_controller_1.CompanyController.updateCompany);
router.patch('/:id/toggle-status', rbac_middleware_1.requireSuperAdmin, company_controller_1.CompanyController.toggleCompanyStatus);
router.post('/sync-payroll-mass/:id', rbac_middleware_1.requireSuperAdmin, company_controller_1.CompanyController.syncPayrollMass);
router.post('/verify-payroll-masses', rbac_middleware_1.requireSuperAdmin, company_controller_1.CompanyController.verifyPayrollMasses);
router.delete('/:id', rbac_middleware_1.requireSuperAdmin, company_controller_1.CompanyController.deleteCompany);
exports.default = router;
//# sourceMappingURL=company.routes.js.map