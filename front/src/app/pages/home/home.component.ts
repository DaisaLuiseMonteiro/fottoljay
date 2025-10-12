import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
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
  currentUser: User | null = null;
  isLoggedIn = false;

  private readonly API_URL = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
    this.checkAuthStatus();
  }

  checkAuthStatus() {
    this.isLoggedIn = this.userService.isLoggedIn();
    if (this.isLoggedIn) {
      this.userService.getCurrentUser().subscribe({
        next: (response) => {
          this.currentUser = response.user;
        },
        error: () => {
          this.isLoggedIn = false;
          this.currentUser = null;
        }
      });
    }
  }

  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.isLoggedIn = false;
        this.currentUser = null;
        this.router.navigate(['/login']);
      },
      error: () => {
        // Even if logout fails, clear local state
        this.isLoggedIn = false;
        this.currentUser = null;
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
      }
    });
  }

  loadProducts(page = 1) {
    this.http.get<ApiResponse>(`${this.API_URL}/products?page=${page}&limit=8`).subscribe({
      next: (response) => {
        console.log('Products loaded:', response.products);
        this.products = response.products;
        this.currentPage = response.pagination.page;
        this.totalPages = response.pagination.totalPages;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        // No fallback data - products will remain empty if API fails
        this.products = [];
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

  onImageError(event: any) {
    console.error('Image failed to load:', event.target.src);
    event.target.src = 'https://via.placeholder.com/300x200?text=Image+non+disponible';
  }
}