export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  whatsappLink: string;
  city: string;
  profilePhoto: string;
  role: 'ADMIN' | 'SELLER';
  createdAt: Date;
}

export type UserRole = 'ADMIN' | 'SELLER';