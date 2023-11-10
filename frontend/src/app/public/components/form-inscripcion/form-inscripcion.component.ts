import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/services/shared/authTokenService';

@Component({
  selector: 'app-form-inscripcion',
  templateUrl: './form-inscripcion.component.html'
})

export class FormInscripcionComponent {

  alerta = {
    status: "",
    message: ""
  };

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
      this.authTokenService.verificarToken(this.inscripcion.token).subscribe(() => {
        console.log(this.inscripcion);
      })
    } else {
      this.router.navigate([''])
      console.log("Debe iniciar sesión para acceder.")
    }
  }



  UpdateForm(formUpdate: NgForm) {

    if(formUpdate.valid) {
   
    const updInscripcion =  formUpdate.value
    this.alerta = { status: 'success', message: 'Se ha guardado el formulario correctamente!' }
    console.log(this.alerta, updInscripcion);

      

    } else {
      this.alerta = { status: 'error', message: 'Falta completar campos obligatorios.' }
      console.log(this.alerta);
    }
    
    


    
  }


}
