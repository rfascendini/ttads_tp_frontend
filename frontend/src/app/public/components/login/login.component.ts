import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/loginService';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/services/authTokenService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent {

  alerta = {
    status: "",
    message: ""
  };

  constructor(private loginService: LoginService, private router: Router, private authTokenService: AuthTokenService) { }

  onSubmit(form: NgForm) {

    if (form.valid) {

      const usuario: string = form.value.usuario
      const password: string = form.value.password

      if (usuario != '' && password != '') {

        this.loginService.login(usuario, password).subscribe((response) => {

          this.alerta.status = response.status
          this.alerta.message = response.message

          if (this.alerta.status === "success") {

            sessionStorage.setItem('nombre', response.user['nombre']);
            sessionStorage.setItem('apellido', response.user['apellido']);
            sessionStorage.setItem('username', response.user['userName']);
            sessionStorage.setItem('token', response.user['token']);
            this.router.navigate(['gestor']);

          } else {
            this.router.navigate(['login']);
          }

        })
      }

    } else {
      console.log("Error. No puede enviar parametros vacios.");
    }

  }

}


