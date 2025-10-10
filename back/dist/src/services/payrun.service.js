"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRunService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PayRunService {
    async createPayRun(data) {
        return prisma.payRun.create({
            data: {
                companyId: data.companyId,
                periodStart: data.periodStart,
                periodEnd: data.periodEnd,
                status: data.status || 'DRAFT',
            },
        });
    }
    async getPayRunsByCompany(companyId) {
        return prisma.payRun.findMany({
            where: { companyId },
            include: {
                payslips: {
                    include: {
                        employee: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getPayRunById(id) {
        return prisma.payRun.findUnique({
            where: { id },
            include: {
                payslips: {
                    include: {
                        employee: true,
                    },
                },
                company: true,
            },
        });
    }
    async updatePayRunStatus(id, status) {
        return prisma.payRun.update({
            where: { id },
            data: { status },
        });
    }
    async updatePayRun(id, data) {
        return prisma.payRun.update({
            where: { id },
            data,
        });
    }
    async finalizePayRun(id) {
        const payRun = await prisma.payRun.findUnique({
            where: { id },
            include: {
                company: {
                    include: {
                        employees: {
                            where: { isActive: true },
                        },
                    },
                },
            },
        });
        if (!payRun) {
            throw new Error('Cycle de paie non trouvé');
        }
        if (payRun.status !== 'DRAFT') {
            throw new Error('Seuls les cycles de paie en brouillon peuvent être finalisés');
        }
        const employees = payRun.company.employees;
        let totalGross = 0;
        let totalNet = 0;
        // Générer les bulletins de salaire pour chaque employé
        for (const employee of employees) {
            let grossSalary = 0;
            let daysWorked = null;
            if (employee.contractType === 'FIXED') {
                // Salaire fixe mensuel
                grossSalary = Number(employee.salaryRate);
            }
            else if (employee.contractType === 'DAILY') {
                // Calculer les jours travaillés dans la période
                const attendances = await prisma.attendance.findMany({
                    where: {
                        employeeId: employee.id,
                        checkInDateTime: {
                            gte: payRun.periodStart,
                            lte: payRun.periodEnd,
                        },
                        status: 'PRESENT',
                    },
                });
                daysWorked = attendances.length;
                grossSalary = daysWorked * Number(employee.salaryRate);
            }
            else if (employee.contractType === 'CONTRACTOR') {
                // Pour les contractuels, utiliser le taux comme montant fixe pour la période
                grossSalary = Number(employee.salaryRate);
            }
            // Calculer les déductions (pour l'instant 0, peut être étendu)
            const deductions = 0;
            const netSalary = grossSalary - deductions;
            // Créer le bulletin de salaire
            await prisma.payslip.create({
                data: {
                    payRunId: id,
                    employeeId: employee.id,
                    grossSalary,
                    deductions,
                    netSalary,
                    daysWorked,
                    paymentStatus: 'PENDING',
                },
            });
            totalGross += grossSalary;
            totalNet += netSalary;
        }
        // Mettre à jour le cycle de paie avec les totaux et changer le statut
        await prisma.payRun.update({
            where: { id },
            data: {
                status: 'APPROVED',
                totalGross,
                totalNet,
            },
        });
        // Récupérer le cycle de paie finalisé avec toutes les relations
        const finalizedPayRun = await prisma.payRun.findUnique({
            where: { id },
            include: {
                payslips: {
                    include: {
                        employee: true,
                    },
                },
                company: true,
            },
        });
        return finalizedPayRun;
    }
    async updatePayslipStatus(payslipId, paymentStatus) {
        return prisma.payslip.update({
            where: { id: payslipId },
            data: { paymentStatus },
            include: {
                employee: true,
                payRun: true,
            },
        });
    }
}
exports.PayRunService = PayRunService;
//# sourceMappingURL=payrun.service.js.map