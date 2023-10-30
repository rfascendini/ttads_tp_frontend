import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthTokenService {

  private urlApi = "http://localhost:3000/api/token/verifyAuth";
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {

  }

  public verifyToken(token: string): Observable<any> {    
    return this.http.post<any>(this.urlApi, { "token" : token }, this.httpOptions);
  }

}