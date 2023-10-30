import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/loginService';
import { Router } from '@angular/router';
import { InscripcionesService } from 'src/services/inscripcionesService';
import { HttpHeaders } from '@angular/common/http';

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

  formLogin(form: NgForm) {

    if (form.valid) {

      const dni: string = form.value.dni
      const token: string = form.value.token

      if (dni != '' && token != '') {

        this.loginService.inscriptionLogin(dni, token).subscribe((response) => {

          // console.log(response);

          this.alerta.status = response.status
          this.alerta.message = response.message

          if (this.alerta.status === "success") {

            sessionStorage.setItem('inscripcion_id', response.inscripcion['id']);
            sessionStorage.setItem('inscripcion_dni', response.inscripcion['alumnonumerodocumento']);
            sessionStorage.setItem('inscripcion_access_token', response.inscripcion['access_token']);
            sessionStorage.setItem('token', response.inscripcion['token']);
            sessionStorage.setItem('inscripcion', JSON.stringify(response.inscripcion));
            this.router.navigate(['formulario']);

          }

        })
      }

    } else {
      this.alerta.status = 'error'
      this.alerta.message = 'No se enviaron parametros.'
    }

  }

//   formSignin(form: NgForm) {

//     const dni: string = form.value.dni
//     const nroTramite: string = form.value.token
//     const email: string = form.value.email

//     console.log(form.value);

//     if (dni != '' && nroTramite != '' && email != '') {

//       this.inscripcionService.addInscripcion(dni, nroTramite, email).subscribe((response) => {

//         console.log(response);

//         this.alerta.status = response.status
//         this.alerta.message = response.message

//         if (this.alerta.status === "success") {

          

//         }

//       })
//     }

//   }


 }




