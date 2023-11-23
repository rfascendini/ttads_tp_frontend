import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/shared/loginService';


@Component({
  selector: 'app-header-private',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderPrivateComponent {

  constructor(private router: Router, private logginOut: LoginService) { }

  user = JSON.parse(sessionStorage.getItem('user') as string);

  logout() {
    this.logginOut.destroySession();
    this.router.navigate(['login']);
  }

}
