import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: []
})
export class DashboardAdminComponent implements OnInit {
  currentUser: User | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: (response) => {
        this.currentUser = response.user;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        // Even if logout fails, clear local state
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
      }
    });
  }
}