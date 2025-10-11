import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Seller {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  whatsappLink?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  mainPhoto: string;
  seller: Seller;
}

interface ApiResponse {
  products: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  currentPage = 1;
  totalPages = 1;

  private readonly API_URL = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(page = 1) {
    this.http.get<ApiResponse>(`${this.API_URL}/products?page=${page}&limit=8`).subscribe({
      next: (response) => {
        this.products = response.products;
        this.currentPage = response.pagination.page;
        this.totalPages = response.pagination.totalPages;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        // Fallback to static data if API fails
        this.products = [
          {
            id: '1',
            name: 'Smartphone Samsung Galaxy',
            description: 'Téléphone dernier cri avec appareil photo haute résolution',
            price: 599,
            mainPhoto: 'https://via.placeholder.com/300x200?text=Samsung+Galaxy',
            seller: {
              id: '1',
              firstName: 'Jean',
              lastName: 'Dupont',
              email: 'jean@example.com',
              phone: '+221771234567',
              whatsappLink: 'https://wa.me/221771234567'
            }
          },
          {
            id: '2',
            name: 'Ordinateur Portable Dell',
            description: 'Ordinateur performant pour le travail et les loisirs',
            price: 899,
            mainPhoto: 'https://via.placeholder.com/300x200?text=Dell+Laptop',
            seller: {
              id: '2',
              firstName: 'Marie',
              lastName: 'Martin',
              email: 'marie@example.com',
              phone: '+221772345678'
            }
          },
          {
            id: '3',
            name: 'Casque Audio Sony',
            description: 'Casque sans fil avec réduction de bruit active',
            price: 199,
            mainPhoto: 'https://via.placeholder.com/300x200?text=Sony+Headphones',
            seller: {
              id: '3',
              firstName: 'Pierre',
              lastName: 'Dubois',
              email: 'pierre@example.com',
              whatsappLink: 'https://wa.me/221773456789'
            }
          }
        ];
      }
    });
  }

  callSeller(phone: string) {
    window.location.href = `tel:${phone}`;
  }

  whatsappSeller(link: string) {
    window.open(link, '_blank');
  }

  emailSeller(email: string) {
    window.location.href = `mailto:${email}`;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadProducts(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadProducts(this.currentPage - 1);
    }
  }
}