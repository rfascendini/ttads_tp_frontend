import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpOptions } from "./httpOptions";
import { environment } from "../../environments/environment.development"

@Injectable({
  providedIn: "root",
})
export class AuthTokenService {

  private urlApi = environment.apiUrl+":"+environment.apiPort+"/api/token/verifyAuth";

  constructor(private http: HttpClient, private httpOptions: HttpOptions) { }

  public verificarToken(token: string): Observable<any> {

    return this.http.post<any>(this.urlApi, null, this.httpOptions.getHttpOptions());
  }

}