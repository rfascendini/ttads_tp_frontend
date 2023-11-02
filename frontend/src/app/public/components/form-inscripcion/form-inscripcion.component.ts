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
  inscripcion: any = sessionStorage.getItem('inscripcion')

  ngOnInit(): void {

    if (this.inscripcion != null) {
      this.inscripcion = JSON.parse(this.inscripcion);
      this.authTokenService.verificarToken(this.inscripcion.token).subscribe((responseToken) => {
        console.log(this.inscripcion);
      })
    } else {
      this.router.navigate([''])
      console.log("Debe iniciar sesión para acceder.")
    }

  }
}
