import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { JwtUtil } from '../utils/jwt.util';

const prisma = new PrismaClient();

export class AuthService {
  /**
   * Register the first Super Admin user
   */
  static async registerSuperAdmin(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) {
    const userCount = await prisma.user.count();
    if (userCount > 0) {
      throw new Error('Super Admin already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        role: UserRole.ADMIN,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
      },
    });

    return user;
  }

  /**
   * Register a seller user
   */
  static async registerSeller(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
    whatsappLink?: string;
    city?: string;
    profilePhoto?: string;
  }) {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        whatsappLink: data.whatsappLink,
        city: data.city,
        profilePhoto: data.profilePhoto,
        role: UserRole.SELLER,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        whatsappLink: true,
        city: true,
        profilePhoto: true,
        role: true,
        createdAt: true,
      },
    });

    return user;
  }

  /**
   * Authenticate user and return token
   */
  static async login(email: string, password: string) {
    console.log('Tentative de connexion pour:', email);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    console.log('Utilisateur trouvé:', user ? 'OUI' : 'NON');
    if (user) {
      console.log('Détails utilisateur:', {
        id: user.id,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        forcePasswordChange: user.forcePasswordChange,
      });
    }

    if (!user) {
      console.log('Utilisateur non trouvé');
      throw new Error('Invalid credentials');
    }

    if (!user.isActive) {
      console.log('Utilisateur inactif');
      throw new Error('Invalid credentials');
    }

    console.log('Vérification du mot de passe...');
    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log('Mot de passe valide:', isValidPassword ? 'OUI' : 'NON');

    if (!isValidPassword) {
      console.log('Mot de passe incorrect');
      throw new Error('Invalid credentials');
    }

    if (user.forcePasswordChange) {
      return {
        requiresPasswordChange: true,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      };
    }

    const token = JwtUtil.generate({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    };
  }

  /**
   * Get current user info
   */
  static async getCurrentUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };
  }

  /**
   * Update user profile (first name, last name)
   */
  static async updateProfile(userId: string, data: { firstName: string; lastName: string }) {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
      },
    });

    return user;
  }

  /**
   * Complete first login setup (update profile and change password)
   */
  static async completeFirstLogin(userId: string, data: {
    firstName: string;
    lastName: string;
    newPassword: string;
  }) {
    const hashedNewPassword = await bcrypt.hash(data.newPassword, 12);

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        password: hashedNewPassword,
        forcePasswordChange: false,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
      },
    });

    return user;
  }

  /**
   * Change user password
   */
  static async changePassword(userId: string, currentPassword: string, newPassword: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (!user.forcePasswordChange) {
      const isValidPassword = await bcrypt.compare(currentPassword, user.password);
      if (!isValidPassword) {
        throw new Error('Current password is incorrect');
      }
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedNewPassword,
        forcePasswordChange: false // Reset the force flag
      },
    });

    return { message: 'Password changed successfully' };
  }
}