import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/loginService';

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
  
  response: any;

  constructor(private loginService: LoginService) { }

  loginForm(username: string,password: string) {
    this.loginService.sendData(username,password).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      
    })
  }


  onSubmit(form: NgForm) {
    if (form.valid) {

      console.log('JSON con los datos del form:', form.value);
      // You can send the form data to a server or perform any other action here.
      if (form.value.usuario != '' && form.value.password != '') {

        this.loginForm(form.value.usuario, form.value.password);



      } else {
        console.log("Error. No puede enviar parametros vacios.");
      }


    }
  }

}
