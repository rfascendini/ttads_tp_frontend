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

export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authTokenService: AuthTokenService) { }

  user: IUsuario = JSON.parse((sessionStorage.getItem('usuario') as IUsuario) as string)

  ngOnInit(): void {

    if (this.user != null) {
      this.authTokenService.verificarToken(String(this.user.token)).subscribe((responseToken) => {
        if (responseToken.status != "success") {
          this.router.navigate(['login'])
        }
      })
    } else {
      this.router.navigate(['login'])
    }

  }

}



