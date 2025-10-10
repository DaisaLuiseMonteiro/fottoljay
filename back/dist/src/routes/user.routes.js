"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const rbac_middleware_1 = require("../middlewares/rbac.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
router.get('/users', rbac_middleware_1.requireSuperAdmin, user_controller_1.UserController.getAllUsers);
router.post('/companies/:companyId/users', rbac_middleware_1.requireAdmin, rbac_middleware_1.requireCompanyAccess, user_controller_1.userValidation.createUserForCompany, validation_middleware_1.handleValidationErrors, user_controller_1.UserController.createUserForCompany);
router.get('/companies/:companyId/users', rbac_middleware_1.requireCompanyAccess, user_controller_1.UserController.getUsersForCompany);
router.put('/:id', rbac_middleware_1.requireAdmin, user_controller_1.userValidation.updateUser, validation_middleware_1.handleValidationErrors, user_controller_1.UserController.updateUser);
router.delete('/:id', rbac_middleware_1.requireAdmin, user_controller_1.UserController.deleteUser);
router.get('/:id', user_controller_1.UserController.getUserById);
exports.default = router;
//# sourceMappingURL=user.routes.js.map