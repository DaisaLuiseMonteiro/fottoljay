import { Request, Response } from 'express';
import { PrismaClient, PhotoType } from '@prisma/client';
import multer, { Multer } from 'multer';
import * as path from 'path';
import * as fs from 'fs';

const prisma = new PrismaClient();

// Category mapping from display names to enum values
const categoryMapping: { [key: string]: string } = {
  'Agroalimentaire': 'AGROALIMENTAIRE',
  'Animaux': 'ANIMAUX',
  'Immobilier': 'IMMOBILIER',
  'Maison': 'MAISON',
  'Équipement': 'EQUIPEMENT',
  'Mode & Beauté': 'MODE_BEAUTE',
  'Multimédia': 'MULTIMEDIA',
  'Sport & Loisirs': 'SPORT_LOISIRS',
  'Véhicules': 'VEHICULES',
  'Autre': 'AUTRE'
};

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

export class ProductController {
  static async getProducts(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 8;
      const offset = (page - 1) * limit;
      const search = req.query.search as string;
      const category = req.query.category as string;
      const city = req.query.city as string;

      const whereClause: any = {
        status: 'APPROVED' as any
      };

      if (search) {
        whereClause.name = {
          contains: search
        };
      }

      if (category) {
        const mappedCategory = categoryMapping[category] || category;
        whereClause.category = mappedCategory as any;
      }

      if (city) {
        whereClause.seller = {
          city: city
        };
      }

      const products = await prisma.product.findMany({
        skip: offset,
        take: limit,
        where: whereClause,
        include: {
          seller: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              phone: true,
              whatsappLink: true,
              city: true
            }
          },
          photos: {
            where: { type: PhotoType.MAIN },
            orderBy: { order: 'asc' },
            take: 1
          }
        }
      });

      const total = await prisma.product.count({
        where: whereClause
      });

      const formattedProducts = products.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        mainPhoto: product.photos[0]?.url ? `http://localhost:3000${product.photos[0].url}` : 'https://via.placeholder.com/300x200?text=No+Image',
        seller: product.seller
      }));

      res.json({
        products: formattedProducts,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async createProduct(req: Request, res: Response) {
    try {
      const { name, description, price, category } = req.body;
      const sellerId = (req as any).user.id; // Assuming auth middleware sets user

      const product = await prisma.product.create({
        data: {
          sellerId,
          name,
          description,
          price: parseFloat(price),
          category: category as any,
          status: 'PENDING' as any
        }
      });

      // Handle photo uploads
      const files = (req as any).files;
      if (files && Array.isArray(files)) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          await prisma.photo.create({
            data: {
              productId: product.id,
              url: `/uploads/${file.filename}`,
              type: i === 0 ? PhotoType.MAIN : PhotoType.SECONDARY,
              order: i + 1
            }
          });
        }
      }

      res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Serve uploaded images
  static async getImage(req: Request, res: Response) {
    try {
      const filename = req.params.filename;
      const imagePath = path.join(__dirname, '../../uploads', filename);

      if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
      } else {
        res.status(404).json({ error: 'Image not found' });
      }
    } catch (error) {
      console.error('Error serving image:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Get pending products for admin review
  static async getPendingProducts(req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany({
        where: {
          status: 'PENDING' as any
        },
        include: {
          seller: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              phone: true,
              whatsappLink: true
            }
          },
          photos: {
            orderBy: { order: 'asc' }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      res.json({ products });
    } catch (error) {
      console.error('Error fetching pending products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Approve or reject product
  static async updateProductStatus(req: Request, res: Response) {
    try {
      const { productId, status } = req.body;

      if (!['APPROVED', 'REJECTED'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }

      const product = await prisma.product.update({
        where: { id: productId },
        data: { status: status as any },
        include: {
          seller: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        }
      });

      res.json({ message: `Product ${status.toLowerCase()} successfully`, product });
    } catch (error) {
      console.error('Error updating product status:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Get products by seller
  static async getProductsBySeller(req: Request, res: Response) {
    try {
      const sellerId = (req as any).user.id;

      const products = await prisma.product.findMany({
        where: { sellerId },
        include: {
          photos: {
            where: { type: PhotoType.MAIN },
            orderBy: { order: 'asc' },
            take: 1
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      res.json({ products });
    } catch (error) {
      console.error('Error fetching seller products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Multer middleware for uploads
  static uploadPhotos = upload.array('photos', 5); // Max 5 photos
}