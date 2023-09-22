import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({

  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule],
  providers: [],
  bootstrap: [],
  exports: [
    HeaderComponent,
    FooterComponent]
})

export class PublicSharedModule { }
