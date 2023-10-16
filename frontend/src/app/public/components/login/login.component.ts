import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/loginService';
import { Router } from '@angular/router';


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

  dataUsuario: any = null;
  error: any = null;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(form: NgForm) {

    if (form.valid) {

      const usuario: string = form.value.usuario
      const password: string = form.value.password

      if (usuario != '' && password != '') {

        // this.loginForm(form.value.usuario, form.value.password);

        this.loginService.sendData(usuario, password).subscribe((response) => {
          
          this.dataUsuario = response.user;

          if (this.dataUsuario != null) {
            sessionStorage.setItem("dataUsuario", this.dataUsuario);
            this.router.navigate(['gestor'])
          }

        })

      }


    } else {
      console.log("Error. No puede enviar parametros vacios.");
    }

  }
  
}




