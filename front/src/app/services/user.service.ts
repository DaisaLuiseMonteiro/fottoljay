import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:3000/api/auth';
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    });
  }

  private getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  register(userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
    whatsappLink?: string;
    city?: string;
  }): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, userData, { headers: this.getHeaders() });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { email, password }, { headers: this.getHeaders() })
      .pipe(
        tap((response: any) => {
          if (response.token) {
            this.setToken(response.token);
          }
        })
      );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.API_URL}/logout`, {}, { headers: this.getHeaders() })
      .pipe(
        tap(() => {
          localStorage.removeItem(this.TOKEN_KEY);
        })
      );
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.API_URL}/me`, { headers: this.getHeaders() });
  }

  changePassword(data: { currentPassword: string; newPassword: string }): Observable<any> {
    return this.http.put(`${this.API_URL}/change-password`, data, { headers: this.getHeaders() });
  }

  initialChangePassword(data: { email: string; newPassword: string }): Observable<any> {
    return this.http.put(`${this.API_URL}/initial-change-password`, data, { headers: this.getHeaders() });
  }

  completeFirstLogin(data: { firstName: string; lastName: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/complete-first-login`, data, { headers: this.getHeaders() });
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}