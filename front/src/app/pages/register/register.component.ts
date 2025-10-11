import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  errorMessage = '';
  cities = ['Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor'];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: [''],
      whatsappLink: [''],
      city: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      const formData = this.registerForm.value;

      const userData = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone || undefined,
        whatsappLink: formData.whatsappLink || undefined,
        city: formData.city || undefined
      };

      this.userService.register(userData).subscribe({
        next: (response: any) => {
          this.loading = false;
          if (response.message === 'Super Admin created successfully') {
            this.router.navigate(['/login']);
          } else {
            this.errorMessage = response.error || 'Erreur lors de l\'inscription';
          }
        },
        error: (error: any) => {
          this.loading = false;
          this.errorMessage = 'Erreur lors de l\'inscription. Vérifiez vos informations.';
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires correctement.';
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}