import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { ProductController } from '../controllers/product.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', AuthController.register);

router.post('/register-seller', AuthController.registerSeller);

router.post('/login', AuthController.login);

router.post('/logout', authenticate, AuthController.logout);

router.get('/me', authenticate, AuthController.getCurrentUser);

router.put('/change-password', authenticate, AuthController.changePassword);

router.put('/initial-change-password', AuthController.initialChangePassword);

router.post('/complete-first-login', authenticate, AuthController.completeFirstLogin);

router.get('/products', ProductController.getProducts);

export default router;