import { Request, Response } from 'express';
export declare class AuthController {
    static register(req: Request, res: Response): any;
    static login(req: Request, res: Response): any;
    static logout(req: Request, res: Response): any;
    static getCurrentUser(req: Request, res: Response): unknown;
    static changePassword(req: Request, res: Response): unknown;
    static initialChangePassword(req: Request, res: Response): unknown;
    static completeFirstLogin(req: Request, res: Response): unknown;
}
export declare const authValidation: {
    register: {};
    login: {};
    changePassword: {};
    initialChangePassword: {};
    completeFirstLogin: {};
};
//# sourceMappingURL=auth.controller.d.ts.map