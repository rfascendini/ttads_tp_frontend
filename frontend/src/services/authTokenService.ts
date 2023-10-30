import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthTokenService {

  private urlApi = "http://localhost:3000/api/token/verifyAuth";

  constructor(private http: HttpClient) { }

  public verificarToken(token: string): Observable<any> {
    
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    })
  };

    return this.http.post<any>(this.urlApi,null,httpOptions);
  }

}