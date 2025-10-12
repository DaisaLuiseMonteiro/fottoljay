import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DashboardVendeurComponent } from './pages/dashboard-vendeur/dashboard-vendeur.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminVendeursComponent } from './pages/admin-vendeurs/admin-vendeurs.component';
import { AdminProduitsComponent } from './pages/admin-produits/admin-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardAdminComponent,
    DashboardVendeurComponent,
    HomeComponent,
    AdminVendeursComponent,
    AdminProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
