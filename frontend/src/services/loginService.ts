import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {

  }

  public adminLogin(username: string, password: string): Observable<any> {
    const urlApi: string = "http://localhost:3000/api/admin/login";
    return this.http.post<any>(urlApi, { "username": username, "password": password }, this.httpOptions);
  }

  public inscriptionLogin(dni: string, token: string): Observable<any> {
    const urlApi: string = "http://localhost:3000/api/inscripcion/login";
    return this.http.post<any>(urlApi, { "dni": dni, "token": token }, this.httpOptions);
  }

  

  public destroySession() {
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('apellido');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }

}