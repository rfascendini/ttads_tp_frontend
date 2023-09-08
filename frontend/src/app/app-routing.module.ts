import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/components/home/home.component';
import { FormInscripcionComponent } from './public/components/form-inscripcion/form-inscripcion.component';
import { AdminPanelComponent } from './private/components/admin-panel/admin-panel.component';
import { ConfiguracionComponent } from './private/components/configuracion/configuracion.component';
import { ExcepcionComponent } from './private/components/excepcion/excepcion.component';
import { ExportadosComponent } from './private/components/exportados/exportados.component';
import { ExportarComponent } from './private/components/exportar/exportar.component';
import { InscripcionesComponent } from './private/components/inscripciones/inscripciones.component';
import { PreguntasComponent } from './private/components/preguntas/preguntas.component';
import { SysacadComponent } from './private/components/sysacad/sysacad.component';
import { UsuariosComponent } from './private/components/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Ingresantes - FRRo' },
  { path: 'formulario', component: FormInscripcionComponent, title: 'Formulario de Ingreso - 2024' },
  { path: 'adminpanel', component: AdminPanelComponent, title: 'Admin Panel - Gestor Inscripciones' },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'exportados', component: ExportadosComponent },
  { path: 'sysacad', component: SysacadComponent },
  { path: 'excepcion', component: ExcepcionComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'exportar', component: ExportarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


