import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/services/authTokenService';

@Component({
  selector: 'app-form-inscripcion',
  templateUrl: './form-inscripcion.component.html'
})

export class FormInscripcionComponent {


  // LLAMAMOS A LAS VARIABLES QUE SE CONECTAN A LAS API'S
  constructor(
    private router: Router,
    private authTokenService: AuthTokenService,
  ) { }


  // ASIGNAMOS EL TOKEN DE LA SESSION EN UNA VARIABLE
  token: any = sessionStorage.getItem('token');


  ngOnInit(): void {

    if (this.token != null) {

      // VALIDAMOS QUE EXISTA EL TOKEN PARA MANTENERSE EN LA PAGINA
      this.authTokenService.verifyToken(this.token).subscribe((responseToken) => {

        // SI EL TOKEN ES INCORRECTO QUE NOS ENVÍE A OTRO SITIO
        if (responseToken.status != "success") {
          this.router.navigate([''])
        }

      })

    } else {
      this.router.navigate([''])
    }

  }





}
