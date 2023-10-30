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

  constructor(private router: Router, private logginOut: LoginService) { }

  dataUsuario : any = sessionStorage.getItem('usuario')

  usuario = JSON.parse(this.dataUsuario);

  logout() {
    this.logginOut.destroySession();
    this.router.navigate(['login']);
  }

}
