import { HttpErrorResponse } from '@angular/common/http/index.js';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface.js';
import { InscripcionesService } from 'src/services/entities/inscripcionesService';
import { LoginService } from 'src/services/shared/loginService';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-inscripcion',
  templateUrl: './form-inscripcion.component.html'
})

export class FormInscripcionComponent {

  alert = {
    status: "",
    message: ""
  };


  // LLAMAMOS A LAS VARIABLES QUE SE CONECTAN A LAS API'S
  constructor(
    private router: Router,
    private inscripcionService: InscripcionesService,
    private logginOut: LoginService
  ) { }


  // ASIGNAMOS EL TOKEN DE LA SESSION EN UNA VARIABLE
  inscripcion: IInscripcion = JSON.parse((sessionStorage.getItem('inscripcion') as IInscripcion) as string)

  UpdateForm(formUpdate: NgForm) {

    if (formUpdate.valid) {

      const updInscripcion: IInscripcion = formUpdate.value
      this.alert = { status: 'success', message: 'Se ha guardado el formulario correctamente!' }

      this.inscripcionService.updateInscripcion(updInscripcion).subscribe({
        next: (response) => {

          this.alert = { status: response.status, message: response.message }

          if (this.alert.status === 'success') {
            Swal.fire({
              icon: this.alert.status,
              title: this.alert.message,
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                this.logginOut.destroySession();
                this.router.navigate(['']);
              };
            })
          }

        },
        error: (e) => {
          this.alert = { status: e.error.status, message: e.error.message }
        }
      });

    } else {
      this.alert = { status: 'error', message: 'Falta completar campos obligatorios.' }
    }

  }


}
