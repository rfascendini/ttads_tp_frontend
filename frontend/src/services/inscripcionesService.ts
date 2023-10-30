import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InscripcionesService {

  constructor(private http: HttpClient) {}

  private token : any = sessionStorage.getItem('token')

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token,
    })
  };

  public getInscripciones(): Observable<any> {
    const urlApi: string = "http://localhost:3000/api/inscripciones";
    return this.http.get<any>(urlApi, this.httpOptions);
  }

  // public addInscripcion(dni: string, nroTramite: string, email: string): Observable<any> {
  //   const urlApi: string = "http://localhost:3000/api/inscripciones/add";
  //   return this.http.post<any>(urlApi, { "dni" : dni, "nroTramite" : nroTramite, "email" : email }, this.httpOptions);
  // }
}