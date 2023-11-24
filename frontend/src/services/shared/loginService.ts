import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class LoginService {


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public adminLogin(username: string, password: string): Observable<any> {
    const urlApi = environment.apiUrl+environment.apiPort+environment.apiRoot+"/admin/login";
    return this.http.post<any>(urlApi, { "username": username, "password": password }, this.httpOptions);
  }

  public inscriptionLogin(dni: string, token: string): Observable<any> {
    const urlApi: string = environment.apiUrl+environment.apiPort+environment.apiRoot+"/inscripcion/login";
    return this.http.post<any>(urlApi, { "dni": dni, "token": token }, this.httpOptions);
  }

  public destroySession() {
    sessionStorage.clear()
  }

}