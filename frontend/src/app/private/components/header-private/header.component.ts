import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/services/logoutService';


@Component({
  selector: 'app-header-private',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderPrivateComponent implements OnInit {

  constructor(private router: Router, private logginout: LogoutService) { }

  usuario = {
    nombre: sessionStorage.getItem('nombre'),
    apellido: sessionStorage.getItem('apellido'),
    username: sessionStorage.getItem('username'),
    token: sessionStorage.getItem('token')
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token') == undefined) {
      this.router.navigate(['login']);
    }
  }

  logout() {
    this.logginout.logout();
  }

}
