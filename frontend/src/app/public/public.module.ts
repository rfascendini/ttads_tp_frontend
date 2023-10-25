import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { FormInscripcionModule } from './components/form-inscripcion/form-inscripcion.module';
import { CommonModule } from '@angular/common';
import { PublicSharedModule } from './shared/shared.module';
import { LoginComponent } from './components/admin-login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    PublicSharedModule,
    FormInscripcionModule,
    FormsModule,
    CommonModule],
  providers: [],
  bootstrap: [],
  exports: []
})

export class PublicModule { }
