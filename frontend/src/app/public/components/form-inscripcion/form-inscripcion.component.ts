import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
  inscripcion: any = sessionStorage.getItem('inscripcion')


  ngOnInit(): void {

    if (this.token != null) {

      this.inscripcion = JSON.parse(this.inscripcion);
      console.log(this.inscripcion);

      // VALIDAMOS QUE EXISTA EL TOKEN PARA MANTENERSE EN LA PAGINA
      this.authTokenService.verificarToken(this.token).subscribe((responseToken) => {

        console.log(responseToken);
        

      })

    } else {
      this.router.navigate([''])
    }

  }





}
