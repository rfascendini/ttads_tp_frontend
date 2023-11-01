import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/loginService';
import { Router } from '@angular/router';
import { InscripcionesService } from 'src/services/inscripcionesService';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

@Injectable({
  providedIn: 'root'
})


export class HomeComponent {

  alerta = {
    status: "",
    message: ""
  };

  constructor(private loginService: LoginService, private router: Router, private inscripcionService: InscripcionesService) { }

  formLogin(formLogin: NgForm) {

    if (formLogin.valid) {

      const dni: string = formLogin.value.dni
      const token: string = formLogin.value.token

      if (dni != '' && token != '') {

        this.loginService.inscriptionLogin(dni, token).subscribe((response) => {

          this.alerta = { status: response.status, message: response.message }

          if (this.alerta.status === "success") {
            sessionStorage.setItem('inscripcion', JSON.stringify(response.inscripcion));
            this.router.navigate(['formulario']);
          }

        }, (error: HttpErrorResponse) => {
          console.log(error.error)
          this.alerta = { status: error.error.status, message: error.error.message }
        })
      }

    } else {
      this.alerta = { status: 'error', message: 'Falta uno o más parametros.' }
    }

  }

  formSignin(formSignin: NgForm) {

    const { dni, nroTramiteDni, email } = formSignin.value

    if (dni != '' && nroTramiteDni != '' && email != '') {

      console.log(formSignin.value);

      this.inscripcionService.addInscripcion(dni, nroTramiteDni, email).subscribe((response) => {

        this.alerta = { status: response.status, message: response.message }

      }, (error: HttpErrorResponse) => {
        console.log(error.error)
        this.alerta = { status: error.error.status, message: error.error.message }
      })

    } else {
      this.alerta = { status: 'error', message: 'Falta uno o más parametros.' }
      console.log(this.alerta);
      
    }

  }


}




