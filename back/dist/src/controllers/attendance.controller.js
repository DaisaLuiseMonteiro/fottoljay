"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceController = void 0;
const attendance_service_1 = require("../services/attendance.service");
const attendanceService = new attendance_service_1.AttendanceService();
class AttendanceController {
    async createAttendance(req, res) {
        try {
            const { employeeId, checkInDateTime, checkOutDateTime, status } = req.body;
            if (!employeeId || !checkInDateTime) {
                return res.status(400).json({
                    error: 'employeeId et checkInDateTime sont requis'
                });
            }
            const attendance = await attendanceService.createAttendance({
                employeeId,
                checkInDateTime: new Date(checkInDateTime),
                checkOutDateTime: checkOutDateTime ? new Date(checkOutDateTime) : undefined,
                status: status || 'PRESENT',
            });
            console.log('✅ Pointage créé:', attendance.id, 'pour employé:', employeeId);
            res.status(201).json({
                message: 'Pointage créé avec succès',
                attendance,
            });
        }
        catch (error) {
            console.error('Erreur création pointage:', error);
            res.status(500).json({
                error: 'Erreur lors de la création du pointage',
                details: error.message,
            });
        }
    }
    async getAttendancesByCompany(req, res) {
        var _a, _b;
        try {
            const { companyId } = req.params;
            if (!companyId) {
                return res.status(400).json({
                    error: 'companyId est requis'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à cette entreprise'
                });
            }
            const attendances = await attendanceService.getAttendancesByCompany(companyId);
            res.json({
                attendances,
            });
        }
        catch (error) {
            console.error('Erreur récupération pointages:', error);
            res.status(500).json({
                error: 'Erreur lors de la récupération des pointages',
                details: error.message,
            });
        }
    }
    async getAttendanceById(req, res) {
        var _a, _b;
        try {
            const { id } = req.params;
            const attendance = await attendanceService.getAttendanceById(id);
            if (!attendance) {
                return res.status(404).json({
                    error: 'Pointage non trouvé'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== attendance.employee.companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à ce pointage'
                });
            }
            res.json({
                attendance,
            });
        }
        catch (error) {
            console.error('Erreur récupération pointage:', error);
            res.status(500).json({
                error: 'Erreur lors de la récupération du pointage',
                details: error.message,
            });
        }
    }
    async updateAttendance(req, res) {
        var _a, _b;
        try {
            const { id } = req.params;
            const { checkOutDateTime, status } = req.body;
            const attendance = await attendanceService.getAttendanceById(id);
            if (!attendance) {
                return res.status(404).json({
                    error: 'Pointage non trouvé'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== attendance.employee.companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à ce pointage'
                });
            }
            const updateData = {};
            if (checkOutDateTime)
                updateData.checkOutDateTime = new Date(checkOutDateTime);
            if (status)
                updateData.status = status;
            const updatedAttendance = await attendanceService.updateAttendance(id, updateData);
            console.log('✅ Pointage mis à jour:', id);
            res.json({
                message: 'Pointage mis à jour',
                attendance: updatedAttendance,
            });
        }
        catch (error) {
            console.error('Erreur mise à jour pointage:', error);
            res.status(500).json({
                error: 'Erreur lors de la mise à jour du pointage',
                details: error.message,
            });
        }
    }
    async deleteAttendance(req, res) {
        var _a, _b;
        try {
            const { id } = req.params;
            const attendance = await attendanceService.getAttendanceById(id);
            if (!attendance) {
                return res.status(404).json({
                    error: 'Pointage non trouvé'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== attendance.employee.companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à ce pointage'
                });
            }
            await attendanceService.deleteAttendance(id);
            console.log('✅ Pointage supprimé:', id);
            res.json({
                message: 'Pointage supprimé avec succès',
            });
        }
        catch (error) {
            console.error('Erreur suppression pointage:', error);
            res.status(500).json({
                error: 'Erreur lors de la suppression du pointage',
                details: error.message,
            });
        }
    }
}
exports.AttendanceController = AttendanceController;
//# sourceMappingURL=attendance.controller.js.map