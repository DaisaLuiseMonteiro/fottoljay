"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class EmployeeService {
    static async updateCompanyPayrollMass(companyId) {
        try {
            // Récupérer l'entreprise pour avoir le nom et la masse salariale actuelle
            const company = await prisma.entreprise.findUnique({
                where: { id: companyId },
                select: { name: true, payrollMass: true },
            });
            if (!company) {
                console.error(`Entreprise avec ID ${companyId} non trouvée`);
                return;
            }
            console.log(`Mise à jour de la masse salariale pour l'entreprise ${company.name} (ID: ${companyId})`);
            const employees = await prisma.employee.findMany({
                where: { companyId, isActive: true },
                select: { salaryRate: true },
            });
            console.log(`Employés actifs trouvés: ${employees.length}`);
            console.log(`Salaires:`, employees.map(e => e.salaryRate.toNumber()));
            const calculatedPayrollMass = employees.reduce((sum, emp) => sum + emp.salaryRate.toNumber(), 0);
            console.log(`Nouvelle masse salariale calculée: ${calculatedPayrollMass}`);
            console.log(`Masse salariale actuelle en DB: ${company.payrollMass.toNumber()}`);
            const diff = calculatedPayrollMass - Number(company.payrollMass);
            console.log(`Différence (calculée - DB): ${diff}`);
            // Log spécifique pour "sweet bio"
            if (company.name.toLowerCase().includes('sweet bio')) {
                console.log(`L'entreprise ${company.name} a sa masse salariale égale à ${calculatedPayrollMass}`);
            }
            const result = await prisma.entreprise.update({
                where: { id: companyId },
                data: { payrollMass: calculatedPayrollMass },
            });
            console.log(`Masse salariale mise à jour en DB: ${result.payrollMass}`);
        }
        catch (error) {
            console.error(`Erreur lors de la mise à jour de la masse salariale pour ${companyId}:`, error);
        }
    }
    static async createEmployee(data) {
        const employee = await prisma.employee.create({
            data,
            select: {
                id: true,
                fullName: true,
                position: true,
                contractType: true,
                salaryRate: true,
                phone: true,
                email: true,
                address: true,
                bankName: true,
                accountNumber: true,
                accountHolderName: true,
                isActive: true,
                createdAt: true,
                companyId: true,
            },
        });
        // Update company employee count
        console.log(`Incrementing employee count for company ${data.companyId}`);
        await prisma.entreprise.update({
            where: { id: data.companyId },
            data: { employeeCount: { increment: 1 } },
        });
        console.log(`Employee count incremented for company ${data.companyId}`);
        // Update company payroll mass
        console.log('Calling updateCompanyPayrollMass for company', data.companyId);
        await EmployeeService.updateCompanyPayrollMass(data.companyId);
        console.log('updateCompanyPayrollMass called');
        return employee;
    }
    static async getEmployeesByCompanyId(companyId) {
        const employees = await prisma.employee.findMany({
            where: { companyId },
            select: {
                id: true,
                fullName: true,
                position: true,
                contractType: true,
                salaryRate: true,
                phone: true,
                email: true,
                address: true,
                bankName: true,
                accountNumber: true,
                accountHolderName: true,
                isActive: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        return employees;
    }
    static async getEmployeeById(id) {
        const employee = await prisma.employee.findUnique({
            where: { id },
            select: {
                id: true,
                fullName: true,
                position: true,
                contractType: true,
                salaryRate: true,
                phone: true,
                email: true,
                address: true,
                bankName: true,
                accountNumber: true,
                accountHolderName: true,
                isActive: true,
                createdAt: true,
                companyId: true,
            },
        });
        if (!employee) {
            throw new Error('Employee not found');
        }
        return employee;
    }
    static async updateEmployee(id, data) {
        const employee = await prisma.employee.update({
            where: { id },
            data,
            select: {
                id: true,
                fullName: true,
                position: true,
                contractType: true,
                salaryRate: true,
                phone: true,
                email: true,
                address: true,
                bankName: true,
                accountNumber: true,
                accountHolderName: true,
                isActive: true,
                updatedAt: true,
                companyId: true,
            },
        });
        // Update company payroll mass
        await this.updateCompanyPayrollMass(employee.companyId);
        return employee;
    }
    static async deleteEmployee(id) {
        const employee = await prisma.employee.findUnique({
            where: { id },
            include: {
                payslips: true,
                company: {
                    include: {
                        users: {
                            where: { role: 'ADMIN' }
                        }
                    }
                }
            },
        });
        if (!employee) {
            throw new Error('Employee not found');
        }
        // Check if this employee is the admin of the company
        const adminUser = employee.company.users.filter((user) => user.email === employee.email && user.role === 'ADMIN')[0];
        if (adminUser) {
            throw new Error('Cannot delete the admin employee. The admin must always exist for the company.');
        }
        if (employee.payslips.length > 0) {
            throw new Error('Cannot delete employee with existing payslips');
        }
        // Delete employee and decrement count
        await prisma.employee.delete({
            where: { id },
        });
        await prisma.entreprise.update({
            where: { id: employee.companyId },
            data: { employeeCount: { decrement: 1 } },
        });
        // Update company payroll mass
        await this.updateCompanyPayrollMass(employee.companyId);
        return { message: 'Employee deleted successfully' };
    }
    /**
     * Toggle employee active status
     */
    static async toggleEmployeeStatus(id) {
        const employee = await prisma.employee.findUnique({
            where: { id },
            select: { isActive: true, companyId: true },
        });
        if (!employee) {
            throw new Error('Employee not found');
        }
        const newStatus = !employee.isActive;
        const updatedEmployee = await prisma.employee.update({
            where: { id },
            data: { isActive: newStatus },
            select: {
                id: true,
                fullName: true,
                bankName: true,
                accountNumber: true,
                accountHolderName: true,
                isActive: true,
                companyId: true,
            },
        });
        // Update company payroll mass
        await this.updateCompanyPayrollMass(employee.companyId);
        return updatedEmployee;
    }
}
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map