import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/loginService';


@Component({
  selector: 'app-header-private',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderPrivateComponent {
sessionStorage: any;

  constructor(private router: Router, private logginOut: LoginService) { }

  usuario = {
    nombre: sessionStorage.getItem('nombre'),
    apellido: sessionStorage.getItem('apellido'),
  }

  logout() {
    this.logginOut.destroySession();
    this.router.navigate(['login']);
  }

}
