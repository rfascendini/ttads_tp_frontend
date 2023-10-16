import { NgModule } from '@angular/core';
import { HeaderPrivateComponent } from './components/header-private/header.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { ExcepcionComponent } from './components/excepcion/excepcion.component';
import { ExportadosComponent } from './components/exportados/exportados.component';
import { ExportarComponent } from './components/exportar/exportar.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { SysacadComponent } from './components/sysacad/sysacad.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    HeaderPrivateComponent,
    ConfiguracionComponent,
    ExcepcionComponent,
    ExportadosComponent,
    ExportarComponent,
    InscripcionesComponent,
    PreguntasComponent,
    SysacadComponent,
    UsuariosComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [CommonModule,
    RouterModule],
  providers: [],
  bootstrap: [],
  exports: []
})
export class PrivateModule { }
