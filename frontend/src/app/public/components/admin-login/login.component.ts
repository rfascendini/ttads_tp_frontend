import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/loginService';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/services/authTokenService';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(form: NgForm) {

    if (form.valid) {

      const usuario: string = form.value.usuario
      const password: string = form.value.password

      if (usuario != '' && password != '') {

        this.loginService.adminLogin(usuario, password).subscribe((response) => {

          if (this.alerta.status === "success") {

            sessionStorage.setItem('usuario', JSON.stringify(response.user));
            this.router.navigate(['gestor']);

          }

        }, (error: HttpErrorResponse) => {
          console.log(error.error)
          this.alerta = { status: error.error.status, message: error.error.message }
        });
      }

    } else {
      this.alerta = { status: 'error', message: 'No se enviaron parametros.' }
    }

  }

}


