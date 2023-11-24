import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/interfaces/Usuario.interface.js';
import { AuthTokenService } from 'src/services/shared/authTokenService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})

export class DashboardComponent {

  constructor(private router: Router, private authTokenService: AuthTokenService) { }

  user: IUsuario = (sessionStorage.getItem('user') as IUsuario);
  

}



