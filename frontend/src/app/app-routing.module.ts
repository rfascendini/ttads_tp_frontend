import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/components/home/home.component';
import { FormInscripcionComponent } from './public/components/form-inscripcion/form-inscripcion.component';
import { DashboardComponent } from './private/components/dashboard/dashboard.component';
import { LoginComponent } from './public/components/admin-login/login.component';
import { authGuardAdmin } from 'src/services/guards/auth.guard.admin';
import { authGuardForm } from 'src/services/guards/auth.guard.form';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormInscripcionComponent,
    canActivate: [authGuardForm],
    title: 'Formulario de Ingreso - 2024'
  },
  {
    path: 'gestor',
    canActivate: [authGuardAdmin],
    component: DashboardComponent, 
    title: 'Admin Panel - Gestor Inscripciones'
  },
  {
    path: 'login', 
    component: LoginComponent, 
    title: 'Admin Panel - Login'
  },
  {
    path: '', 
    component: HomeComponent, 
    title: 'Ingresantes - FRRo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


