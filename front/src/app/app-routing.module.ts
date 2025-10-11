import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DashboardVendeurComponent } from './pages/dashboard-vendeur/dashboard-vendeur.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminVendeursComponent } from './pages/admin-vendeurs/admin-vendeurs.component';
import { AdminProduitsComponent } from './pages/admin-produits/admin-produits.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/dashboard', component: DashboardAdminComponent },
  { path: 'admin/vendeurs', component: AdminVendeursComponent },
  { path: 'admin/produits', component: AdminProduitsComponent },
  { path: 'vendeur/dashboard', component: DashboardVendeurComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
