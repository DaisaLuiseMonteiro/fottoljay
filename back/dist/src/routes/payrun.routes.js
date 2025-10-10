"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payrun_controller_1 = require("../controllers/payrun.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const rbac_middleware_1 = require("../middlewares/rbac.middleware");
const router = (0, express_1.Router)();
// Routes pour les cycles de paie (PayRuns)
router.post('/', auth_middleware_1.authenticate, rbac_middleware_1.requireAdmin, payrun_controller_1.PayRunController.prototype.createPayRun.bind(payrun_controller_1.PayRunController.prototype));
router.get('/company/:companyId', auth_middleware_1.authenticate, rbac_middleware_1.requireAdmin, payrun_controller_1.PayRunController.prototype.getPayRunsByCompany.bind(payrun_controller_1.PayRunController.prototype));
router.get('/:id', auth_middleware_1.authenticate, rbac_middleware_1.requireAdmin, payrun_controller_1.PayRunController.prototype.getPayRunById.bind(payrun_controller_1.PayRunController.prototype));
router.put('/:id', auth_middleware_1.authenticate, rbac_middleware_1.requireAdmin, payrun_controller_1.PayRunController.prototype.updatePayRun.bind(payrun_controller_1.PayRunController.prototype));
router.patch('/:id/status', auth_middleware_1.authenticate, rbac_middleware_1.requireAdmin, payrun_controller_1.PayRunController.prototype.updatePayRunStatus.bind(payrun_controller_1.PayRunController.prototype));
router.post('/:id/finalize', auth_middleware_1.authenticate, rbac_middleware_1.requireAdmin, payrun_controller_1.PayRunController.prototype.finalizePayRun.bind(payrun_controller_1.PayRunController.prototype));
// Routes pour les bulletins de salaire (Payslips)
router.get('/company/:companyId/payslips', auth_middleware_1.authenticate, rbac_middleware_1.requireAdmin, payrun_controller_1.PayRunController.prototype.getPayslipsByCompany.bind(payrun_controller_1.PayRunController.prototype));
router.patch('/payslip/:id/status', auth_middleware_1.authenticate, rbac_middleware_1.requireCashier, payrun_controller_1.PayRunController.prototype.updatePayslipStatus.bind(payrun_controller_1.PayRunController.prototype));
exports.default = router;
//# sourceMappingURL=payrun.routes.js.map