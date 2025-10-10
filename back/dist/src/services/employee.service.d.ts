import { ContractType } from '@prisma/client';
export declare class EmployeeService {
    static updateCompanyPayrollMass(companyId: string): any;
    static createEmployee(data: {
        companyId: string;
        fullName: string;
        position: string;
        contractType: ContractType;
        salaryRate: number;
        phone?: string;
        email?: string;
        address?: string;
        bankName?: string;
        accountNumber?: string;
        accountHolderName?: string;
    }): unknown;
    static getEmployeesByCompanyId(companyId: string): unknown;
    static getEmployeeById(id: string): unknown;
    static updateEmployee(id: string, data: {
        fullName?: string;
        position?: string;
        contractType?: ContractType;
        salaryRate?: number;
        phone?: string;
        email?: string;
        address?: string;
        bankName?: string;
        accountNumber?: string;
        accountHolderName?: string;
        isActive?: boolean;
    }): unknown;
    static deleteEmployee(id: string): unknown;
    /**
     * Toggle employee active status
     */
    static toggleEmployeeStatus(id: string): unknown;
}
//# sourceMappingURL=employee.service.d.ts.map