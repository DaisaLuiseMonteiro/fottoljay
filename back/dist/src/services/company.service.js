"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const client_1 = require("@prisma/client");
const password_util_1 = require("../utils/password.util");
const employee_service_1 = require("./employee.service");
const prisma = new client_1.PrismaClient();
class CompanyService {
    static async createCompany(data) {
        // Check if phone is unique
        if (data.phone) {
            const existingCompanyByPhone = await prisma.entreprise.findFirst({
                where: { phone: data.phone },
            });
            if (existingCompanyByPhone) {
                throw new Error('Le numéro de téléphone est déjà utilisé par une autre entreprise');
            }
        }
        // Check if website is unique
        if (data.website) {
            // Clean the website URL by removing trailing quotes or invalid characters
            const cleanWebsite = data.website.replace(/["']+$/, '');
            const existingCompany = await prisma.entreprise.findFirst({
                where: { website: cleanWebsite },
            });
            if (existingCompany) {
                throw new Error('Le site web est déjà utilisé par une autre entreprise');
            }
            // Update data with cleaned website
            data.website = cleanWebsite;
        }
        const hashedPassword = await password_util_1.PasswordUtil.hash('passer');
        const company = await prisma.entreprise.create({
            data: {
                name: data.name,
                logo: data.logo,
                address: data.address,
                phone: data.phone,
                email: data.email,
                website: data.website,
                users: {
                    create: {
                        email: data.adminEmail,
                        password: hashedPassword,
                        firstName: 'Admin',
                        lastName: data.name,
                        role: client_1.UserRole.ADMIN,
                        forcePasswordChange: true,
                    },
                },
                employees: {
                    create: {
                        fullName: `${data.name} Admin`,
                        position: 'Administrateur',
                        contractType: 'FIXED',
                        salaryRate: 0, // Salaire à définir plus tard
                        email: data.adminEmail,
                    },
                },
            },
            select: {
                id: true,
                name: true,
                logo: true,
                address: true,
                phone: true,
                email: true,
                website: true,
                isActive: true,
                createdAt: true,
            },
        });
        return company;
    }
    /**
     * Get all companies (Super Admin) or user's company (Admin/Cashier) with real-time payroll mass
     */
    static async getCompanies(userRole, userCompanyId, filters) {
        if (userRole === 'SUPER_ADMIN') {
            let where = {};
            if (filters === null || filters === void 0 ? void 0 : filters.role) {
                where.users = {
                    some: {
                        role: filters.role,
                    },
                };
            }
            const companies = await prisma.entreprise.findMany({
                where,
                select: {
                    id: true,
                    name: true,
                    logo: true,
                    address: true,
                    phone: true,
                    email: true,
                    isActive: true,
                    employeeCount: true,
                    payrollMass: true,
                    createdAt: true,
                    _count: {
                        select: {
                            users: true,
                            employees: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
            });
            // Calculate real-time payroll mass for each company
            const companiesWithRealTimePayroll = await Promise.all(companies.map(async (company) => {
                const employees = await prisma.employee.findMany({
                    where: { companyId: company.id, isActive: true },
                    select: { salaryRate: true },
                });
                const realTimePayrollMass = employees.reduce((sum, emp) => sum + emp.salaryRate.toNumber(), 0);
                // Update stored payroll mass if different
                if (Math.abs(realTimePayrollMass - Number(company.payrollMass)) > 0.01) {
                    await prisma.entreprise.update({
                        where: { id: company.id },
                        data: { payrollMass: realTimePayrollMass },
                    });
                    console.log(`Masse salariale corrigée pour ${company.name}: ${realTimePayrollMass}`);
                }
                return Object.assign(Object.assign({}, company), { payrollMass: realTimePayrollMass });
            }));
            console.log('Companies fetched for SUPER_ADMIN:', companiesWithRealTimePayroll.map(c => ({ name: c.name, payrollMass: c.payrollMass, employeeCount: c.employeeCount, actualEmployees: c._count.employees })));
            return companiesWithRealTimePayroll;
        }
        else if (userCompanyId) {
            const company = await prisma.entreprise.findUnique({
                where: { id: userCompanyId },
                select: {
                    id: true,
                    name: true,
                    logo: true,
                    address: true,
                    phone: true,
                    email: true,
                    isActive: true,
                    employeeCount: true,
                    payrollMass: true,
                    createdAt: true,
                    _count: {
                        select: {
                            users: true,
                            employees: true,
                        },
                    },
                },
            });
            if (!company)
                return [];
            // Calculate real-time payroll mass
            const employees = await prisma.employee.findMany({
                where: { companyId: userCompanyId, isActive: true },
                select: { salaryRate: true },
            });
            const realTimePayrollMass = employees.reduce((sum, emp) => sum + emp.salaryRate.toNumber(), 0);
            // Update stored payroll mass if different
            if (Math.abs(realTimePayrollMass - Number(company.payrollMass)) > 0.01) {
                await prisma.entreprise.update({
                    where: { id: userCompanyId },
                    data: { payrollMass: realTimePayrollMass },
                });
                console.log(`Masse salariale corrigée pour ${company.name}: ${realTimePayrollMass}`);
            }
            return [Object.assign(Object.assign({}, company), { payrollMass: realTimePayrollMass })];
        }
        return [];
    }
    /**
     * Get company by ID with real-time payroll mass calculation
     */
    static async getCompanyById(id) {
        const company = await prisma.entreprise.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                logo: true,
                address: true,
                phone: true,
                email: true,
                isActive: true,
                employeeCount: true,
                payrollMass: true,
                createdAt: true,
                _count: {
                    select: {
                        users: true,
                        employees: true,
                    },
                },
            },
        });
        if (!company) {
            throw new Error('Company not found');
        }
        // Calculate real-time payroll mass
        const employees = await prisma.employee.findMany({
            where: { companyId: id, isActive: true },
            select: { salaryRate: true },
        });
        const realTimePayrollMass = employees.reduce((sum, emp) => sum + emp.salaryRate.toNumber(), 0);
        // Update stored payroll mass if different
        if (Math.abs(realTimePayrollMass - Number(company.payrollMass)) > 0.01) {
            await prisma.entreprise.update({
                where: { id },
                data: { payrollMass: realTimePayrollMass },
            });
            console.log(`Masse salariale corrigée pour ${company.name}: ${realTimePayrollMass}`);
        }
        return Object.assign(Object.assign({}, company), { payrollMass: realTimePayrollMass });
    }
    /**
     * Update company
     */
    static async updateCompany(id, data) {
        // Check if phone is unique
        if (data.phone) {
            const existingCompanyByPhone = await prisma.entreprise.findFirst({
                where: { phone: data.phone, id: { not: id } },
            });
            if (existingCompanyByPhone) {
                throw new Error('Le numéro de téléphone est déjà utilisé par une autre entreprise');
            }
        }
        // Check if website is unique
        if (data.website) {
            // Clean the website URL by removing trailing quotes or invalid characters
            const cleanWebsite = data.website.replace(/["']+$/, '');
            const existingCompany = await prisma.entreprise.findFirst({
                where: { website: cleanWebsite, id: { not: id } },
            });
            if (existingCompany) {
                throw new Error('Le site web est déjà utilisé par une autre entreprise');
            }
            // Update data with cleaned website
            data.website = cleanWebsite;
        }
        const company = await prisma.entreprise.update({
            where: { id },
            data,
            select: {
                id: true,
                name: true,
                logo: true,
                address: true,
                phone: true,
                email: true,
                website: true,
                isActive: true,
                updatedAt: true,
            },
        });
        return company;
    }
    /**
     * Toggle company active status
     */
    static async toggleCompanyStatus(id) {
        const company = await prisma.entreprise.findUnique({
            where: { id },
            select: { isActive: true },
        });
        if (!company) {
            throw new Error('Company not found');
        }
        const newStatus = !company.isActive;
        // Use transaction to update company and all its users
        const result = await prisma.$transaction(async (tx) => {
            // Update company status
            const updatedCompany = await tx.entreprise.update({
                where: { id },
                data: { isActive: newStatus },
                select: {
                    id: true,
                    name: true,
                    isActive: true,
                    updatedAt: true,
                },
            });
            console.log(`Entreprise ${updatedCompany.name} (ID: ${id}) changée à statut: ${newStatus ? 'ACTIVE' : 'INACTIVE'}`);
            // Update all users of this company EXCEPT admins (SUPER_ADMIN and ADMIN roles stay active)
            const userUpdateResult = await tx.user.updateMany({
                where: {
                    companyId: id,
                    role: { not: 'ADMIN' } // Keep ADMIN users active
                },
                data: { isActive: newStatus }
            });
            console.log(`${userUpdateResult.count} utilisateurs non-admin de l'entreprise ${updatedCompany.name} changés à statut: ${newStatus ? 'ACTIVE' : 'INACTIVE'}`);
            return updatedCompany;
        });
        return result;
    }
    /**
     * Delete company
     */
    static async deleteCompany(id) {
        const company = await prisma.entreprise.findUnique({
            where: { id },
        });
        if (!company) {
            throw new Error('Company not found');
        }
        await prisma.entreprise.delete({
            where: { id },
        });
        return { message: 'Company deleted successfully' };
    }
    /**
     * Create employee for company
     */
    static async createEmployee(companyId, data) {
        // Create employee record only (no user account for cashiers)
        const employee = await prisma.employee.create({
            data: Object.assign(Object.assign({}, data), { companyId }),
            select: {
                id: true,
                fullName: true,
                position: true,
                contractType: true,
                salaryRate: true,
                phone: true,
                email: true,
                address: true,
                isActive: true,
                createdAt: true,
            },
        });
        return employee;
    }
    /**
     * Get employees by company ID
     */
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
    /**
     * Get all employees (Super Admin only)
     */
    static async getAllEmployees() {
        const employees = await prisma.employee.findMany({
            select: {
                id: true,
                fullName: true,
                position: true,
                contractType: true,
                salaryRate: true,
                isActive: true,
                createdAt: true,
                companyId: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        return employees;
    }
    /**
     * Vérifier et corriger les masses salariales de toutes les entreprises
     */
    static async verifyAndUpdateAllPayrollMasses() {
        const companies = await prisma.entreprise.findMany({
            select: { id: true, name: true, payrollMass: true },
        });
        const results = [];
        for (const company of companies) {
            const employees = await prisma.employee.findMany({
                where: { companyId: company.id, isActive: true },
                select: { salaryRate: true },
            });
            const calculatedSum = employees.reduce((sum, emp) => sum + emp.salaryRate.toNumber(), 0);
            const currentMass = Number(company.payrollMass);
            const diff = calculatedSum - currentMass;
            console.log(`Entreprise: ${company.name}`);
            console.log(`  Salaires employés actifs: ${employees.length}`);
            console.log(`  Somme calculée: ${calculatedSum}`);
            console.log(`  Masse en DB: ${currentMass}`);
            console.log(`  Différence: ${diff}`);
            if (Math.abs(diff) > 0.01) { // Tolérance pour les décimales
                await prisma.entreprise.update({
                    where: { id: company.id },
                    data: { payrollMass: calculatedSum },
                });
                console.log(`  ✅ Masse salariale corrigée`);
            }
            else {
                console.log(`  ✅ Masse salariale correcte`);
            }
            results.push({
                companyName: company.name,
                employeeCount: employees.length,
                calculatedSum,
                dbMass: currentMass,
                diff,
                corrected: Math.abs(diff) > 0.01,
            });
        }
        return results;
    }
    /**
     * Synchroniser la masse salariale d'une entreprise spécifique
     */
    static async syncPayrollMass(companyId) {
        const employees = await prisma.employee.findMany({
            where: { companyId, isActive: true },
            select: { salaryRate: true },
        });
        const calculatedPayrollMass = employees.reduce((sum, emp) => sum + emp.salaryRate.toNumber(), 0);
        const result = await prisma.entreprise.update({
            where: { id: companyId },
            data: { payrollMass: calculatedPayrollMass },
            select: { id: true, name: true, payrollMass: true },
        });
        console.log(`Masse salariale synchronisée pour ${result.name}: ${calculatedPayrollMass}`);
        return result;
    }
    /**
     * Vérifier et corriger les comptages d'employés de toutes les entreprises
     */
    static async verifyAndUpdateAllEmployeeCounts() {
        const companies = await prisma.entreprise.findMany({
            select: { id: true, name: true, employeeCount: true },
        });
        const results = [];
        for (const company of companies) {
            const actualCount = await prisma.employee.count({
                where: { companyId: company.id },
            });
            const currentCount = company.employeeCount;
            const diff = actualCount - currentCount;
            console.log(`Entreprise: ${company.name}`);
            console.log(`  Comptage actuel en DB: ${currentCount}`);
            console.log(`  Comptage réel: ${actualCount}`);
            console.log(`  Différence: ${diff}`);
            if (diff !== 0) {
                await prisma.entreprise.update({
                    where: { id: company.id },
                    data: { employeeCount: actualCount },
                });
                console.log(`  ✅ Comptage d'employés corrigé`);
            }
            else {
                console.log(`  ✅ Comptage d'employés correct`);
            }
            results.push({
                companyName: company.name,
                dbCount: currentCount,
                actualCount,
                diff,
                corrected: diff !== 0,
            });
        }
        return results;
    }
    /**
     * Get dashboard stats (Super Admin only)
     */
    static async getStats() {
        const totalCompanies = await prisma.entreprise.count();
        const activeCompanies = await prisma.entreprise.count({
            where: { isActive: true },
        });
        const inactiveCompanies = totalCompanies - activeCompanies;
        const totalEmployees = await prisma.employee.count();
        const activeEmployees = await prisma.employee.count({
            where: { isActive: true },
        });
        // S'assurer que toutes les masses salariales sont à jour avant de calculer les stats
        const companies = await prisma.entreprise.findMany({
            select: { id: true, name: true }
        });
        for (const company of companies) {
            await employee_service_1.EmployeeService.updateCompanyPayrollMass(company.id);
        }
        const totalSalaryMass = await prisma.employee.aggregate({
            where: { isActive: true },
            _sum: { salaryRate: true },
        });
        // Calculer le montant total payé depuis les paiements
        const totalPaid = await prisma.payment.aggregate({
            _sum: { amount: true },
        });
        const amountToPay = Number(totalSalaryMass._sum.salaryRate || 0);
        const amountPaid = Number(totalPaid._sum.amount || 0);
        const remainingToPay = amountToPay - amountPaid;
        // For evolution, placeholder data (last 6 months)
        const evolutionData = [
            { month: 'Jan', salaryMass: 50000 },
            { month: 'Feb', salaryMass: 55000 },
            { month: 'Mar', salaryMass: 60000 },
            { month: 'Apr', salaryMass: 58000 },
            { month: 'May', salaryMass: 62000 },
            { month: 'Jun', salaryMass: amountToPay },
        ];
        return {
            totalCompanies,
            activeCompanies,
            inactiveCompanies,
            totalEmployees,
            activeEmployees,
            totalSalaryMass: amountToPay,
            amountToPay,
            remainingToPay,
            evolutionData,
        };
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map