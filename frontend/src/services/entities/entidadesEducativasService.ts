import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpOptions } from "../shared/httpOptions";
import { environment } from "src/environments/environment.development.js";

@Injectable({
  providedIn: "root",
})
export class EntidadesEducativasService {

  private urlApi = environment.apiUrl+environment.apiPort+environment.apiRoot+"/entidadesEducativas";

  constructor(private http: HttpClient, private httpOptions: HttpOptions) { }

  public getEntidadesEducativas(): Observable<any> {

    return this.http.get<any>(this.urlApi, this.httpOptions.getHttpOptions())
  }

}