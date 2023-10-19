import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-private',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderPrivateComponent implements OnInit {

  constructor(private router: Router) { }

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



}
