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
  { name: 'Appartement meublé', price: 15000000, description: 'Appartement moderne meublé, prêt à emménager' },
  { name: 'Apple Watch', price: 4500000, description: 'Apple Watch neuve, état impeccable' },
  { name: 'Canard', price: 250000, description: 'Canard fermier frais, élevé naturellement' },
  { name: 'Gans', price: 350000, description: 'Gans de qualité supérieure, très tendre' },
  { name: 'Huile de tournesol', price: 150000, description: 'Huile de tournesol bio, 5 litres' },
  { name: 'Meuble', price: 3000000, description: 'Meuble design moderne pour salon' },
  { name: 'Moto de course', price: 25000000, description: 'Moto de course puissante et rapide' },
  { name: 'Play 5', price: 5500000, description: 'PlayStation 5 neuve avec accessoires' },
  { name: 'Poulet de chair', price: 200000, description: 'Poulet fermier frais et savoureux' },
  { name: 'Pull homme', price: 350000, description: 'Pull homme élégant en laine douce' },
  { name: 'Tablette d\'oeuf', price: 50000, description: 'Tablette d\'œufs frais du jour' }
];

async function main() {
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
            city: seller.city,
            role: UserRole.SELLER,
          } as any,
        });
        createdSellers.push(createdSeller);
        console.log(`Seller ${seller.email} created successfully`);
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
          name: product.name,
          price: product.price,
          description: product.description,
          category: 'AUTRE', // Default category for existing products
        },
      });

      // Create photo for the product - map product names to exact filenames
      const imageMap: { [key: string]: string } = {
        'Appartement meublé': 'appartement meuble .jpeg',
        'Apple Watch': 'apple watch.jpeg',
        'Canard': 'canard.jpeg',
        'Gans': 'gans.jpeg',
        'Huile de tournesol': 'huile de tournessol.jpeg',
        'Meuble': 'meuble.jpeg',
        'Moto de course': 'moto de course.jpeg',
        'Play 5': 'play 5.jpeg',
        'Poulet de chair': 'poulet de chair.jpeg',
        'Pull homme': 'pull homme .jpeg',
        'Tablette d\'oeuf': 'tablette d\'oeuf.jpeg'
      };

      const imageName = imageMap[product.name];
      if (imageName) {
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
          console.log(`Photo created for product: ${product.name} with file: ${imageName}`);
        } else {
          console.log(`Image file not found for product: ${product.name}`);
        }
      } else {
        console.log(`No image mapping found for product: ${product.name}`);
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