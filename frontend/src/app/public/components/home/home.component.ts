import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/shared/loginService';
import { Router } from '@angular/router';
import { InscripcionesService } from 'src/services/entities/inscripcionesService';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

@Injectable({
  providedIn: 'root'
})


export class HomeComponent {

  alert = {
    status: "",
    message: ""
  };

  constructor(private loginService: LoginService, private router: Router, private inscripcionService: InscripcionesService) { }

  formLogin(formLogin: NgForm) {

    if (formLogin.valid) {

      const dni: string = formLogin.value.dni
      const token: string = formLogin.value.token

      if (dni != '' && token != '') {

        this.loginService.inscriptionLogin(dni, token).subscribe({
          next: (response) => {

            this.alert = { status: response.status, message: response.message }

            if (this.alert.status === "success") {
              sessionStorage.setItem('inscripcion', JSON.stringify(response.inscripcion));
              this.router.navigate(['formulario']);
            }

          },
          error: (e) => {
            this.alert = { status: e.error.status, message: e.error.message }
          }

        })

      } else {
        this.alert = { status: 'error', message: 'Falta uno o más parametros.' }
      }

    }

  }

  formSignin(formSignin: NgForm) {

    const { dni, nroTramiteDni, email } = formSignin.value

    if (dni != '' && nroTramiteDni != '' && email != '') {

      this.inscripcionService.addInscripcion(dni, nroTramiteDni, email).subscribe({

        next: (response) => {

          this.alert = { status: response.status, message: response.message }

        },
        error: (e) => {

          this.alert = { status: e.error.status, message: e.error.message }

        }
      })

    } else {
      this.alert = { status: 'error', message: 'Falta uno o más parametros.' }
    }

  }


}




