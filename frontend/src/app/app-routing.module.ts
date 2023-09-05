import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/components/home/home.component';
import { FormInscripcionComponent } from './public/components/form-inscripcion/form-inscripcion.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Ingresantes - FRRo' },
  { path: 'formulario', component: FormInscripcionComponent, title: 'Formulario de Ingreso - 2024' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


