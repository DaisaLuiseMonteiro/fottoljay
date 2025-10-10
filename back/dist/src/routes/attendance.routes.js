"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendance_controller_1 = require("../controllers/attendance.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const rbac_middleware_1 = require("../middlewares/rbac.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
router.post('/', rbac_middleware_1.requireCompanyAccess, attendance_controller_1.AttendanceController.prototype.createAttendance.bind(attendance_controller_1.AttendanceController.prototype));
router.get('/company/:companyId', rbac_middleware_1.requireCompanyAccess, attendance_controller_1.AttendanceController.prototype.getAttendancesByCompany.bind(attendance_controller_1.AttendanceController.prototype));
router.get('/:id', attendance_controller_1.AttendanceController.prototype.getAttendanceById.bind(attendance_controller_1.AttendanceController.prototype));
router.put('/:id', attendance_controller_1.AttendanceController.prototype.updateAttendance.bind(attendance_controller_1.AttendanceController.prototype));
router.delete('/:id', attendance_controller_1.AttendanceController.prototype.deleteAttendance.bind(attendance_controller_1.AttendanceController.prototype));
exports.default = router;
//# sourceMappingURL=attendance.routes.js.map