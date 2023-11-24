import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IConfiguracionParametro } from "src/interfaces/ConfiguracionParametro.interface";
import { HttpOptions } from "../shared/httpOptions";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class ConfiguracionParametrosService {

  private urlApi = environment.apiUrl+environment.apiPort+environment.apiRoot+"/configuracionesParametros";

  constructor(private http: HttpClient, private httpOptions: HttpOptions) { }
  
  public getConfiguracionParametros(): Observable<IConfiguracionParametro[]> {
    
    return this.http.get<IConfiguracionParametro[]>(this.urlApi, this.httpOptions.getHttpOptions())

  }

}
