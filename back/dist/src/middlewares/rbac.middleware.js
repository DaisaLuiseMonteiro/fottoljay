"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireCashier = exports.requireAdmin = exports.requireSuperAdmin = exports.requireRole = void 0;
/**
 * Middleware to check if user has required role(s)
 * @param allowedRoles - Array of allowed roles
 */
const requireRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: 'Authentication required' });
        }
        if (allowedRoles.indexOf(req.user.role) === -1) {
            return res.status(403).json({ error: 'Insufficient permissions' });
        }
        next();
    };
};
exports.requireRole = requireRole;
/**
 * Middleware for Super Admin only
 */
exports.requireSuperAdmin = (0, exports.requireRole)(['SUPER_ADMIN']);
/**
 * Middleware for Admin and Super Admin
 */
exports.requireAdmin = (0, exports.requireRole)(['SUPER_ADMIN', 'ADMIN']);
/**
 * Middleware for Cashier, Guard, Admin and Super Admin
 */
exports.requireCashier = (0, exports.requireRole)(['SUPER_ADMIN', 'ADMIN', 'CAISSIER', 'VIGILE']);
//# sourceMappingURL=rbac.middleware.js.map