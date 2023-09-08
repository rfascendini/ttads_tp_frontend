import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router) { }

  navigateInscripciones() {
    this.router.navigate(['inscripciones']);
  }
  navigateExportados() {
    this.router.navigate(['exportados']);
  }
  navigateSysacad() {
    this.router.navigate(['sysacad']);
  }
  navigateExcepcion() {
    this.router.navigate(['excepcion']);
  }
  navigateConfiguracion() {
    this.router.navigate(['configuracion']);
  }
  navigatePreguntas() {
    this.router.navigate(['preguntas']);
  }
  navigateUsuarios() {
    this.router.navigate(['usuarios']);
  }
  navigateExportar() {
    this.router.navigate(['exportar']);
  }

}