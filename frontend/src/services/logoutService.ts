import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LogoutService {

  constructor(private router: Router) {

  }

  public logout() {
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('apellido');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    this.router.navigate(['gestor']);
  }


}

