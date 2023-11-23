import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IConfiguracionParametro } from "src/interfaces/ConfiguracionParametro.interface";
import { HttpOptions } from "../shared/httpOptions";

@Injectable({
  providedIn: "root",
})
export class ConfiguracionParametrosService {

  private urlApi = "http://localhost:3000/api/configuracionesParametros";

  constructor(private http: HttpClient, private httpOptions: HttpOptions) { }
  
  public getConfiguracionParametros(): Observable<IConfiguracionParametro[]> {
    
    return this.http.get<IConfiguracionParametro[]>(this.urlApi, this.httpOptions.getHttpOptions())

  }

}
