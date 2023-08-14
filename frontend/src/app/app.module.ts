import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/components/home/home.component';
import { FormInscripcionComponent } from './public/components/form-inscripcion/form-inscripcion.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { SectionCarreraComponent } from './public/components/form-inscripcion/section-carrera/section-carrera.component';
import { SectionDatosPersonalesComponent } from './public/components/form-inscripcion/section-datos-personales/section-datos-personales.component';
import { SectionDiscapacidadComponent } from './public/components/form-inscripcion/section-discapacidad/section-discapacidad.component';
import { SectionNacimientoComponent } from './public/components/form-inscripcion/section-nacimiento/section-nacimiento.component';
import { SectionDomicilioComponent } from './public/components/form-inscripcion/section-domicilio/section-domicilio.component';
import { SectionContactoComponent } from './public/components/form-inscripcion/section-contacto/section-contacto.component';
import { SectionSecundarioComponent } from './public/components/form-inscripcion/section-secundario/section-secundario.component';
import { SectionEstudiosComponent } from './public/components/form-inscripcion/section-estudios/section-estudios.component';
import { SectionOtrosComponent } from './public/components/form-inscripcion/section-otros/section-otros.component';
import { SectionTrabajoComponent } from './public/components/form-inscripcion/section-trabajo/section-trabajo.component';
import { SectionDeporteComponent } from './public/components/form-inscripcion/section-deporte/section-deporte.component';
import { SectionTecnologiaComponent } from './public/components/form-inscripcion/section-tecnologia/section-tecnologia.component';
import { SectionFamiliaComponent } from './public/components/form-inscripcion/section-familia/section-familia.component';
import { SectionCasaComponent } from './public/components/form-inscripcion/section-casa/section-casa.component';



@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    FormInscripcionComponent,
    NavbarComponent,
    FooterComponent,
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: 
            [
            AppComponent,
            HomeComponent,
            FormInscripcionComponent,
            NavbarComponent
            ],
  exports: [RouterModule]
})
export class AppModule { }
