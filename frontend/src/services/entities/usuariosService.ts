import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpOptions } from "../shared/httpOptions";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {

  private urlApi = environment.apiUrl+environment.apiPort+environment.apiRoot+"/usuarios";


  constructor(private http: HttpClient, private httpOptions: HttpOptions) { }

  public getUsuarios(): Observable<any> {

    return this.http.get<any>(this.urlApi, this.httpOptions.getHttpOptions())
  }

}