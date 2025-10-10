"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const rbac_middleware_1 = require("../middlewares/rbac.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
router.post('/', rbac_middleware_1.requireAdmin, employee_controller_1.employeeValidation.createEmployee, validation_middleware_1.handleValidationErrors, employee_controller_1.EmployeeController.createEmployee);
router.get('/companies/:companyId', rbac_middleware_1.requireCompanyAccess, employee_controller_1.EmployeeController.getEmployeesByCompanyId);
router.get('/:id', employee_controller_1.EmployeeController.getEmployeeById);
router.put('/:id', rbac_middleware_1.requireAdmin, employee_controller_1.employeeValidation.updateEmployee, validation_middleware_1.handleValidationErrors, employee_controller_1.EmployeeController.updateEmployee);
router.delete('/:id', rbac_middleware_1.requireAdmin, employee_controller_1.EmployeeController.deleteEmployee);
router.patch('/:id/toggle-status', rbac_middleware_1.requireAdmin, employee_controller_1.EmployeeController.toggleEmployeeStatus);
exports.default = router;
//# sourceMappingURL=employee.routes.js.map