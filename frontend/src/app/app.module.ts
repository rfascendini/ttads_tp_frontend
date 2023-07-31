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


@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    FormInscripcionComponent,
    NavbarComponent
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
