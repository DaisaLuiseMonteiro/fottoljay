import { ContractType } from '@prisma/client';
export declare class CompanyService {
    static createCompany(data: {
        name: string;
        logo?: string;
        address?: string;
        phone?: string;
        email?: string;
        website?: string;
        adminEmail: string;
    }): unknown;
    /**
     * Get all companies (Super Admin) or user's company (Admin/Cashier) with real-time payroll mass
     */
    static getCompanies(userRole: string, userCompanyId?: string, filters?: {
        role?: string;
    }): unknown;
    /**
     * Get company by ID with real-time payroll mass calculation
     */
    static getCompanyById(id: string): unknown;
    /**
     * Update company
     */
    static updateCompany(id: string, data: {
        name?: string;
        logo?: string;
        address?: string;
        phone?: string;
        email?: string;
        website?: string;
    }): unknown;
    /**
     * Toggle company active status
     */
    static toggleCompanyStatus(id: string): unknown;
    /**
     * Delete company
     */
    static deleteCompany(id: string): unknown;
    /**
     * Create employee for company
     */
    static createEmployee(companyId: string, data: {
        fullName: string;
        position: string;
        contractType: ContractType;
        salaryRate: number;
        phone?: string;
        email?: string;
        address?: string;
    }): unknown;
    /**
     * Get employees by company ID
     */
    static getEmployeesByCompanyId(companyId: string): unknown;
    /**
     * Get all employees (Super Admin only)
     */
    static getAllEmployees(): unknown;
    /**
     * Vérifier et corriger les masses salariales de toutes les entreprises
     */
    static verifyAndUpdateAllPayrollMasses(): unknown;
    /**
     * Synchroniser la masse salariale d'une entreprise spécifique
     */
    static syncPayrollMass(companyId: string): unknown;
    /**
     * Vérifier et corriger les comptages d'employés de toutes les entreprises
     */
    static verifyAndUpdateAllEmployeeCounts(): unknown;
    /**
     * Get dashboard stats (Super Admin only)
     */
    static getStats(): unknown;
}
//# sourceMappingURL=company.service.d.ts.map