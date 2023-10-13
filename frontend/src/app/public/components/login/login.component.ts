import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/loginService.js';

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

  constructor(private loginService: LoginService) { }

  sendDataToServer() {
    const jsonData = { /* Your JSON data here */ };

    this.loginService.sendData(jsonData)
      .subscribe((response: any) => {
        console.log('Data sent successfully:', response);
        // Handle the server's response here
      },
        (error: any) => {
          console.error('Error sending data:', error);
          // Handle errors here
        });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {

      console.log('JSON con los datos del form:', form.value);
      // You can send the form data to a server or perform any other action here.
      if (form.value.usuario != '' && form.value.password != '') {


      } else {
        console.log("Error. No puede enviar parametros vacios.");
      }


    }
  }

}
