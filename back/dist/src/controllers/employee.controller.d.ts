import { Request, Response } from 'express';
export declare class EmployeeController {
    /**
     * Create a new employee
     */
    static createEmployee(req: Request, res: Response): any;
    /**
     * Get employees by company ID
     */
    static getEmployeesByCompanyId(req: Request, res: Response): any;
    /**
     * Get employee by ID
     */
    static getEmployeeById(req: Request, res: Response): any;
    /**
     * Update employee
     */
    static updateEmployee(req: Request, res: Response): any;
    /**
     * Delete employee
     */
    static deleteEmployee(req: Request, res: Response): any;
    /**
     * Toggle employee active status
     */
    static toggleEmployeeStatus(req: Request, res: Response): any;
}
export declare const employeeValidation: {
    createEmployee: {};
    updateEmployee: {};
};
//# sourceMappingURL=employee.controller.d.ts.map