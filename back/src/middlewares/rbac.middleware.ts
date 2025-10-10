import { Request, Response, NextFunction } from 'express';

type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'CAISSIER' | 'VIGILE';

/**
 * Middleware to check if user has required role(s)
 * @param allowedRoles - Array of allowed roles
 */
export const requireRole = (allowedRoles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (allowedRoles.indexOf(req.user.role as UserRole) === -1) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
};

/**
 * Middleware for Super Admin only
 */
export const requireSuperAdmin = requireRole(['SUPER_ADMIN']);

/**
 * Middleware for Admin and Super Admin
 */
export const requireAdmin = requireRole(['SUPER_ADMIN', 'ADMIN']);

/**
 * Middleware for Cashier, Guard, Admin and Super Admin
 */
export const requireCashier = requireRole(['SUPER_ADMIN', 'ADMIN', 'CAISSIER', 'VIGILE']);