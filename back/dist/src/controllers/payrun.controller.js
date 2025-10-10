"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRunController = void 0;
const client_1 = require("@prisma/client");
const payrun_service_1 = require("../services/payrun.service");
const prisma = new client_1.PrismaClient();
const payRunService = new payrun_service_1.PayRunService();
class PayRunController {
    async createPayRun(req, res) {
        var _a, _b;
        try {
            const { companyId, periodStart, periodEnd, status } = req.body;
            if (!companyId || !periodStart || !periodEnd) {
                return res.status(400).json({
                    error: 'companyId, periodStart et periodEnd sont requis'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à cette entreprise'
                });
            }
            const payRun = await payRunService.createPayRun({
                companyId,
                periodStart: new Date(periodStart),
                periodEnd: new Date(periodEnd),
                status,
            });
            console.log('✅ PayRun créé:', payRun.id, 'pour entreprise:', companyId);
            res.status(201).json({
                message: 'Cycle de paie créé avec succès',
                payRun,
            });
        }
        catch (error) {
            console.error('Erreur création PayRun:', error);
            res.status(500).json({
                error: 'Erreur lors de la création du cycle de paie',
                details: error.message,
            });
        }
    }
    async getPayRunsByCompany(req, res) {
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
            const payRuns = await payRunService.getPayRunsByCompany(companyId);
            res.json({
                payRuns,
            });
        }
        catch (error) {
            console.error('Erreur récupération PayRuns:', error);
            res.status(500).json({
                error: 'Erreur lors de la récupération des cycles de paie',
                details: error.message,
            });
        }
    }
    async getPayRunById(req, res) {
        var _a, _b;
        try {
            const { id } = req.params;
            const payRun = await payRunService.getPayRunById(id);
            if (!payRun) {
                return res.status(404).json({
                    error: 'Cycle de paie non trouvé'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== payRun.companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à ce cycle de paie'
                });
            }
            res.json({
                payRun,
            });
        }
        catch (error) {
            console.error('Erreur récupération PayRun:', error);
            res.status(500).json({
                error: 'Erreur lors de la récupération du cycle de paie',
                details: error.message,
            });
        }
    }
    async updatePayRunStatus(req, res) {
        var _a, _b;
        try {
            const { id } = req.params;
            const { status } = req.body;
            if (!status) {
                return res.status(400).json({
                    error: 'status est requis'
                });
            }
            const payRun = await payRunService.getPayRunById(id);
            if (!payRun) {
                return res.status(404).json({
                    error: 'Cycle de paie non trouvé'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== payRun.companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à ce cycle de paie'
                });
            }
            const updatedPayRun = await payRunService.updatePayRunStatus(id, status);
            console.log('✅ Statut PayRun mis à jour:', id, '->', status);
            res.json({
                message: 'Statut du cycle de paie mis à jour',
                payRun: updatedPayRun,
            });
        }
        catch (error) {
            console.error('Erreur mise à jour statut PayRun:', error);
            res.status(500).json({
                error: 'Erreur lors de la mise à jour du statut',
                details: error.message,
            });
        }
    }
    async finalizePayRun(req, res) {
        var _a, _b;
        try {
            const { id } = req.params;
            const payRun = await payRunService.getPayRunById(id);
            if (!payRun) {
                return res.status(404).json({
                    error: 'Cycle de paie non trouvé'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== payRun.companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à ce cycle de paie'
                });
            }
            const finalizedPayRun = await payRunService.finalizePayRun(id);
            console.log('✅ PayRun finalisé:', id, 'avec bulletins de salaire générés');
            res.json({
                message: 'Cycle de paie finalisé avec succès',
                payRun: finalizedPayRun,
            });
        }
        catch (error) {
            console.error('Erreur finalisation PayRun:', error);
            res.status(500).json({
                error: 'Erreur lors de la finalisation du cycle de paie',
                details: error.message,
            });
        }
    }
    async updatePayRun(req, res) {
        var _a, _b;
        try {
            const { id } = req.params;
            const { periodStart, periodEnd, status } = req.body;
            if (!periodStart && !periodEnd && !status) {
                return res.status(400).json({
                    error: 'Au moins un champ (periodStart, periodEnd, status) doit être fourni'
                });
            }
            const payRun = await payRunService.getPayRunById(id);
            if (!payRun) {
                return res.status(404).json({
                    error: 'Cycle de paie non trouvé'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== payRun.companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à ce cycle de paie'
                });
            }
            // Vérifier que le cycle est en brouillon pour les modifications de dates
            if ((periodStart || periodEnd) && payRun.status !== 'DRAFT') {
                return res.status(400).json({
                    error: 'Seuls les cycles de paie en brouillon peuvent être modifiés'
                });
            }
            const updateData = {};
            if (periodStart)
                updateData.periodStart = new Date(periodStart);
            if (periodEnd)
                updateData.periodEnd = new Date(periodEnd);
            if (status)
                updateData.status = status;
            const updatedPayRun = await payRunService.updatePayRun(id, updateData);
            console.log('✅ PayRun mis à jour:', id);
            res.json({
                message: 'Cycle de paie mis à jour avec succès',
                payRun: updatedPayRun,
            });
        }
        catch (error) {
            console.error('Erreur mise à jour PayRun:', error);
            res.status(500).json({
                error: 'Erreur lors de la mise à jour du cycle de paie',
                details: error.message,
            });
        }
    }
    async getPayslipsByCompany(req, res) {
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
            const payslips = await prisma.payslip.findMany({
                where: {
                    payRun: {
                        companyId: companyId
                    }
                },
                include: {
                    employee: true,
                    payRun: true,
                },
                orderBy: {
                    createdAt: 'desc'
                },
            });
            res.json({
                payslips,
            });
        }
        catch (error) {
            console.error('Erreur récupération Payslips:', error);
            res.status(500).json({
                error: 'Erreur lors de la récupération des bulletins de salaire',
                details: error.message,
            });
        }
    }
    async updatePayslipStatus(req, res) {
        var _a, _b;
        try {
            const { id } = req.params;
            const { paymentStatus } = req.body;
            if (!paymentStatus || !['PENDING', 'PARTIAL', 'PAID'].includes(paymentStatus)) {
                return res.status(400).json({
                    error: 'paymentStatus requis et doit être PENDING, PARTIAL ou PAID'
                });
            }
            const payslip = await prisma.payslip.findUnique({
                where: { id },
                include: {
                    payRun: true,
                },
            });
            if (!payslip) {
                return res.status(404).json({
                    error: 'Bulletin de salaire non trouvé'
                });
            }
            // Vérifier que l'utilisateur appartient à l'entreprise
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'SUPER_ADMIN' && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.companyId) !== payslip.payRun.companyId) {
                return res.status(403).json({
                    error: 'Accès non autorisé à ce bulletin de salaire'
                });
            }
            const updatedPayslip = await payRunService.updatePayslipStatus(id, paymentStatus);
            console.log('✅ Statut paiement mis à jour:', id, '->', paymentStatus);
            res.json({
                message: 'Statut de paiement mis à jour',
                payslip: updatedPayslip,
            });
        }
        catch (error) {
            console.error('Erreur mise à jour statut paiement:', error);
            res.status(500).json({
                error: 'Erreur lors de la mise à jour du statut de paiement',
                details: error.message,
            });
        }
    }
}
exports.PayRunController = PayRunController;
//# sourceMappingURL=payrun.controller.js.map