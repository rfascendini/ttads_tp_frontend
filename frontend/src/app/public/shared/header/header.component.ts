import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/shared/loginService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{

  constructor(private router: Router, private logginOut: LoginService) { }

  inscripcion : any = sessionStorage.getItem('inscripcion');

  logout() {
    this.logginOut.destroySession();
    this.router.navigate(['']);
  }

}
