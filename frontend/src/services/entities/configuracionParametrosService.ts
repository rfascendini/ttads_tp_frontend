import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IConfiguracionParametro } from "src/interfaces/ConfiguracionParametro.interface";

@Injectable({
  providedIn: "root",
})
export class ConfiguracionParametrosService {

  private urlApi = "http://localhost:3000/api/configuracionesParametros";
  private inscripcion: any = sessionStorage.getItem('inscripcion')

  constructor(private http: HttpClient) { }
  
  public getConfiguracionParametros(): Observable<IConfiguracionParametro[]> {
    
    this.inscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.inscripcion['token'],
      })
    };

    return this.http.get<IConfiguracionParametro[]>(this.urlApi, httpOptions)

  }

}
