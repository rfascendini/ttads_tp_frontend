import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {

  private urlApi = "http://localhost:3000/api/usuarios/login";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {

  }

  public sendData(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.urlApi, { "usuario": username, "password": password }, this.httpOptions);
  }

}