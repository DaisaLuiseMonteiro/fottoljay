import { PrismaClient, UserRole, PhotoType } from '@prisma/client';
import bcrypt from 'bcryptjs';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface Seller {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  whatsappLink: string;
  city: string;
}

interface Product {
  name: string;
  price: number;
  description: string;
}

const sellers: Seller[] = [
  {
    email: 'vendeur1@gmail.com',
    firstName: 'Amadou',
    lastName: 'Diallo',
    phone: '775312572',
    whatsappLink: 'https://wa.me/qr/7X7I5DTSAJDFK1',
    city: 'Dakar'
  },
  {
    email: 'vendeur2@gmail.com',
    firstName: 'Fatou',
    lastName: 'Sow',
    phone: '701234567',
    whatsappLink: 'https://wa.me/qr/7X7I5DTSAJDFK2',
    city: 'Thiès'
  },
  {
    email: 'vendeur3@gmail.com',
    firstName: 'Moussa',
    lastName: 'Ba',
    phone: '761234567',
    whatsappLink: 'https://wa.me/qr/7X7I5DTSAJDFK3',
    city: 'Saint-Louis'
  },
  {
    email: 'vendeur4@gmail.com',
    firstName: 'Aissatou',
    lastName: 'Diagne',
    phone: '781234567',
    whatsappLink: 'https://wa.me/qr/7X7I5DTSAJDFK4',
    city: 'Ziguinchor'
  },
  {
    email: 'vendeur5@gmail.com',
    firstName: 'Omar',
    lastName: 'Ndiaye',
    phone: '751234567',
    whatsappLink: 'https://wa.me/qr/7X7I5DTSAJDFK5',
    city: 'Kaolack'
  }
];

const products: Product[] = [
  { name: 'appartement meuble', price: 15000000, description: 'Appartement moderne meublé, prêt à emménager' },
  { name: 'apple watch', price: 4500000, description: 'Apple Watch neuve, état impeccable' },
  { name: 'canard', price: 250000, description: 'Canard fermier frais, élevé naturellement' },
  { name: 'gans', price: 350000, description: 'Gans de qualité supérieure, très tendre' },
  { name: 'huile de tournessol', price: 150000, description: 'Huile de tournesol bio, 5 litres' },
  { name: 'meuble', price: 3000000, description: 'Meuble design moderne pour salon' },
  { name: 'moto de course', price: 25000000, description: 'Moto de course puissante et rapide' },
  { name: 'play 5', price: 5500000, description: 'PlayStation 5 neuve avec accessoires' },
  { name: 'poulet de chair', price: 200000, description: 'Poulet fermier frais et savoureux' },
  { name: 'pull homme', price: 350000, description: 'Pull homme élégant en laine douce' },
  { name: 'tablette d\'oeuf', price: 50000, description: 'Tablette d\'œufs frais du jour' }
];

async function main(): Promise<void> {
  try {
    const hashedPassword = bcrypt.hashSync('passer', 12);

    // Create admin user
    try {
      await prisma.user.create({
        data: {
          email: 'ibou@gmail.com',
          password: hashedPassword,
          firstName: 'Ibou',
          lastName: 'Admin',
          role: UserRole.ADMIN,
        } as any,
      });
      console.log('Admin user created successfully');
    } catch (error) {
      console.log('Admin user already exists, skipping...');
    }

    // Create sellers
    const createdSellers: any[] = [];
    for (const seller of sellers) {
      try {
        const createdSeller = await prisma.user.create({
          data: {
            email: seller.email,
            password: hashedPassword,
            firstName: seller.firstName,
            lastName: seller.lastName,
            phone: seller.phone,
            whatsappLink: seller.whatsappLink,
            role: UserRole.SELLER,
          } as any,
        });
        createdSellers.push(createdSeller);
      } catch (error) {
        console.log(`Seller ${seller.email} already exists, skipping...`);
        // Find existing seller
        const existingSeller = await prisma.user.findUnique({
          where: { email: seller.email }
        });
        if (existingSeller) {
          createdSellers.push(existingSeller);
        }
      }
    }

    console.log('Sellers created successfully');

    // Create products with photos
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const seller = createdSellers[i % createdSellers.length];

      const createdProduct = await prisma.product.create({
        data: {
          sellerId: seller.id,
          price: product.price,
          description: product.description,
        },
      });

      // Create photo for the product
      const imageName = product.name + '.jpeg';
      const imagePath = path.join(__dirname, '../uploads', imageName);

      console.log(`Checking image: ${imageName} at ${imagePath}`);
      console.log(`File exists: ${fs.existsSync(imagePath)}`);

      if (fs.existsSync(imagePath)) {
        await prisma.photo.create({
          data: {
            productId: createdProduct.id,
            url: `/uploads/${imageName}`,
            type: PhotoType.MAIN,
            order: 1,
          } as any,
        });
        console.log(`Photo created for product: ${product.name}`);
      } else {
        console.log(`Image not found for product: ${product.name}`);
      }
    }

    console.log('Products and photos created successfully');

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();