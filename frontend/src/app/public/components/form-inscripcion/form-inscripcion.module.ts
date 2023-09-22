import { NgModule } from '@angular/core';
import { SectionCarreraComponent } from './section-carrera/section-carrera.component';
import { SectionDatosPersonalesComponent } from './section-datos-personales/section-datos-personales.component';
import { SectionDiscapacidadComponent } from './section-discapacidad/section-discapacidad.component';
import { SectionNacimientoComponent } from './section-nacimiento/section-nacimiento.component';
import { SectionDomicilioComponent } from './section-domicilio/section-domicilio.component';
import { SectionContactoComponent } from './section-contacto/section-contacto.component';
import { SectionSecundarioComponent } from './section-secundario/section-secundario.component';
import { SectionEstudiosComponent } from './section-estudios/section-estudios.component';
import { SectionOtrosComponent } from './section-otros/section-otros.component';
import { SectionTrabajoComponent } from './section-trabajo/section-trabajo.component';
import { SectionDeporteComponent } from './section-deporte/section-deporte.component';
import { SectionTecnologiaComponent } from './section-tecnologia/section-tecnologia.component';
import { SectionFamiliaComponent } from './section-familia/section-familia.component';
import { SectionCasaComponent } from './section-casa/section-casa.component';
import { FormInscripcionComponent } from './form-inscripcion.component';
import { PublicSharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({

  declarations: [
    FormInscripcionComponent,
    SectionCarreraComponent,
    SectionDatosPersonalesComponent,
    SectionDiscapacidadComponent,
    SectionNacimientoComponent,
    SectionDomicilioComponent,
    SectionContactoComponent,
    SectionSecundarioComponent,
    SectionEstudiosComponent,
    SectionOtrosComponent,
    SectionTrabajoComponent,
    SectionDeporteComponent,
    SectionTecnologiaComponent,
    SectionFamiliaComponent,
    SectionCasaComponent,
  ],
  imports: [PublicSharedModule, CommonModule],
  providers: [],
  bootstrap: [],
  exports: []
})
export class FormInscripcionModule { }
