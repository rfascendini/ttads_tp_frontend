import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/services/authTokenService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})

export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authTokenService: AuthTokenService) { }

  usuario: any = sessionStorage.getItem('usuario')

  ngOnInit(): void {

    if (this.usuario != null) {
      this.usuario = JSON.parse(this.usuario)
      this.authTokenService.verificarToken(this.usuario.token).subscribe((responseToken) => {
        if (responseToken.status != "success") {
          this.router.navigate(['login'])
        } else {
          console.log(this.usuario);
        }
      })
    } else {
      this.router.navigate(['login'])
      console.log("Debe iniciar sesión para acceder.")
      
    }

  }

}



