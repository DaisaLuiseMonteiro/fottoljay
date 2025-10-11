import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProductController {
  static async getProducts(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 8;
      const offset = (page - 1) * limit;

      const products = await prisma.product.findMany({
        skip: offset,
        take: limit,
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
            where: { type: 'MAIN' },
            orderBy: { order: 'asc' },
            take: 1
          }
        }
      });

      const total = await prisma.product.count();

      const formattedProducts = products.map(product => ({
        id: product.id,
        name: product.description, // Assuming description is name, adjust if needed
        description: product.description,
        price: product.price,
        mainPhoto: product.photos[0]?.url || 'https://via.placeholder.com/300x200?text=No+Image',
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
}