 import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password, firstName, lastName } = req.body;

      const user = await AuthService.registerSuperAdmin({
        email,
        password,
        firstName,
        lastName,
      });

      res.status(201).json({
        message: 'Super Admin created successfully',
        user,
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async registerSeller(req: Request, res: Response) {
    try {
      const { email, password, firstName, lastName } = req.body;

      const user = await AuthService.registerSeller({
        email,
        password,
        firstName,
        lastName,
      });

      res.status(201).json({
        message: 'Seller created successfully',
        user,
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      console.log(' Requête de connexion reçue:', { email, hasPassword: !!password });

      const result = await AuthService.login(email, password);

      console.log('✅ Connexion réussie pour:', email);
      console.log('📋 Résultat:', {
        hasToken: !!result.token,
        requiresPasswordChange: result.requiresPasswordChange,
        userRole: result.user.role
      });

      res.json(result);
    } catch (error: any) {
      console.log('Erreur de connexion pour:', email, '- Erreur:', error.message);
      res.status(401).json({ error: error.message });
    }
  }

  static async logout(req: Request, res: Response) {
    res.json({ message: 'Logged out successfully' });
  }

  static async getCurrentUser(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Not authenticated' });
      }

      const user = await AuthService.getCurrentUser(req.user.id);

      res.json({ user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async changePassword(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Not authenticated' });
      }

      const { currentPassword, newPassword } = req.body;

      const result = await AuthService.changePassword(
        req.user.id,
        currentPassword || '',
        newPassword
      );

      res.json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async initialChangePassword(req: Request, res: Response) {
    try {
      const { email, newPassword } = req.body;

      if (!email || !newPassword) {
        return res.status(400).json({ error: 'Email and new password are required' });
      }

      const { PrismaClient } = require('@prisma/client');
      const prisma = new PrismaClient();

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      if (!user.forcePasswordChange) {
        return res.status(400).json({ error: 'Password change not required' });
      }

      const result = await AuthService.changePassword(
        user.id,
        '',
        newPassword
      );

      res.json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async completeFirstLogin(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Not authenticated' });
      }

      const { firstName, lastName, newPassword } = req.body;

      const user = await AuthService.completeFirstLogin(req.user.id, {
        firstName,
        lastName,
        newPassword,
      });

      res.json({
        message: 'First login setup completed successfully',
        user,
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}