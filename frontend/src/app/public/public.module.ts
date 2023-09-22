import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { FormInscripcionModule } from './components/form-inscripcion/form-inscripcion.module';
import { CommonModule } from '@angular/common';
import { PublicSharedModule } from './shared/shared.module';

@NgModule({

  declarations: [
    HomeComponent,
  ],
  imports: [
    PublicSharedModule,
    FormInscripcionModule,
    CommonModule],
  providers: [],
  bootstrap: [],
  exports: []
})

export class PublicModule { }
