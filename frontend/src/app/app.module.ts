import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';

@NgModule({
  
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    PublicModule,
    PrivateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule,]
})

export class AppModule { }
