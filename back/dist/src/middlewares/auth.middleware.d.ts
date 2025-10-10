import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: string;
            };
        }
    }
}
/**
 * Middleware to authenticate JWT tokens
 */
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => unknown;
//# sourceMappingURL=auth.middleware.d.ts.map