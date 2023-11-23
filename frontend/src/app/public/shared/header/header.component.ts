import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/shared/loginService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private logginOut: LoginService) { }
  
  loggedIn : boolean = false;
  
  ngOnInit(): void {
    if(sessionStorage.getItem('inscripcion') != null) {
      this.loggedIn = true;
    }
  }

  logout() {
    this.logginOut.destroySession();
    this.router.navigate(['']);
  }

}
