import { Request, Response, NextFunction } from 'express';
type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'CAISSIER' | 'VIGILE';
/**
 * Middleware to check if user has required role(s)
 * @param allowedRoles - Array of allowed roles
 */
export declare const requireRole: (allowedRoles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
/**
 * Middleware for Super Admin only
 */
export declare const requireSuperAdmin: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
/**
 * Middleware for Admin and Super Admin
 */
export declare const requireAdmin: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
/**
 * Middleware for Cashier, Guard, Admin and Super Admin
 */
export declare const requireCashier: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=rbac.middleware.d.ts.map