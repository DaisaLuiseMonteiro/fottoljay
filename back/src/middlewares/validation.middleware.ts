import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Phone number validation for Senegal (starts with 70, 77, 76, 78, 75 followed by 7 digits)
export const validatePhoneNumber = (value: string) => {
  const phoneRegex = /^7[05768]\d{7}$/;
  if (!phoneRegex.test(value)) {
    throw new Error('Le numéro de téléphone doit commencer par 70, 77, 76, 78 ou 75 et contenir 9 chiffres au total');
  }
  return true;
};

// User registration validation
export const validateUserRegistration = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email invalide'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Le mot de passe doit contenir au moins 6 caractères'),
  body('firstName')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Le prénom doit contenir au moins 2 caractères'),
  body('lastName')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Le nom doit contenir au moins 2 caractères'),
  body('phone')
    .optional()
    .custom(validatePhoneNumber),
  body('whatsappLink')
    .optional()
    .isURL()
    .withMessage('Le lien WhatsApp doit être une URL valide')
];

// Product creation validation
export const validateProductCreation = [
  body('description')
    .trim()
    .isLength({ min: 10 })
    .withMessage('La description doit contenir au moins 10 caractères'),
  body('price')
    .isFloat({ min: 0 })
    .withMessage('Le prix doit être un nombre positif')
];

// Middleware to handle validation errors
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map(error => ({
        field: (error as any).param || (error as any).path,
        message: error.msg
      }))
    });
  }
  next();
};