import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/shared/loginService';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent {

  alert = {
    status: "",
    message: ""
  };

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(form: NgForm) {

    if (form.valid) {

      const username: string = form.value.username
      const password: string = form.value.password

      if (username != '' && password != '') {

        this.loginService.adminLogin(username, password).subscribe((response) => {

          console.log(response);
          

          if (response.status === 'success') {

            sessionStorage.setItem('user', JSON.stringify(response.user));

            this.router.navigate(['gestor']);

          }

        }, (error: HttpErrorResponse) => {
          this.alert = { status: error.error.status, message: error.error.message }
        });
      }

    } else {
      this.alert = { status: 'error', message: 'No se enviaron parametros.' }
    }

  }

}


