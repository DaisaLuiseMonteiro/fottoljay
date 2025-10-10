import { Request, Response } from 'express';
export declare class CompanyController {
    /**
     * Create a new company
     */
    static createCompany(req: Request, res: Response): unknown;
    /**
     * Get companies
     */
    static getCompanies(req: Request, res: Response): unknown;
    /**
     * Get company by ID
     */
    static getCompanyById(req: Request, res: Response): any;
    /**
     * Get current user's company
     */
    static getMyCompany(req: Request, res: Response): unknown;
    /**
     * Update company
     */
    static updateCompany(req: Request, res: Response): any;
    /**
     * Toggle company active status
     */
    static toggleCompanyStatus(req: Request, res: Response): any;
    /**
     * Delete company
     */
    static deleteCompany(req: Request, res: Response): any;
    /**
     * Create employee for company
     */
    static createEmployee(req: Request, res: Response): any;
    /**
     * Get employees by company ID
     */
    static getEmployeesByCompanyId(req: Request, res: Response): any;
    /**
     * Get all employees
     */
    static getAllEmployees(req: Request, res: Response): any;
    /**
     * Synchroniser la masse salariale d'une entreprise
     */
    static syncPayrollMass(req: Request, res: Response): unknown;
    /**
     * Vérifier et corriger les masses salariales
     */
    static verifyPayrollMasses(req: Request, res: Response): unknown;
    /**
     * Get dashboard stats
     */
    static getStats(req: Request, res: Response): any;
}
export declare const companyValidation: {
    createCompany: {};
    createEmployee: {};
    updateCompany: {};
};
//# sourceMappingURL=company.controller.d.ts.map