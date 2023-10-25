import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/loginService';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/services/authTokenService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})

export class DashboardComponent implements OnInit {

  // LLAMAMOS A LAS VARIABLES QUE SE CONECTAN A LAS API'S
  constructor(private loginService: LoginService, private router: Router, private authTokenService: AuthTokenService) { }

  // ASIGNAMOS EL TOKEN DE LA SESSION EN UNA VARIABLE
  token: any = sessionStorage.getItem('token');
  usuario: { nombre: string | null; apellido: string | null; username: string | null; token: string | null; } | undefined;

  ngOnInit(): void {

    if (this.token != null) {

      // VALIDAMOS QUE EXISTA EL TOKEN PARA MANTENERSE EN LA PAGINA
      this.authTokenService.verifyToken(this.token).subscribe((responseToken) => {

        console.log(responseToken);

        // SI EL TOKEN ES INCORRECTO QUE NOS ENVÍE A OTRO SITIO
        if (responseToken.status != "success") {

          this.router.navigate(['login'])

        } else {

          this.usuario = {
            nombre: sessionStorage.getItem('nombre'),
            apellido: sessionStorage.getItem('apellido'),
            username: sessionStorage.getItem('username'),
            token: sessionStorage.getItem('token')
          }

        }
      })
    } else {
      this.router.navigate(['login'])
    }

  }
}



