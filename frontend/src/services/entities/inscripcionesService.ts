import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IInscripcion } from "src/interfaces/Inscripcion.interface.js";

@Injectable({
  providedIn: "root",
})
export class InscripcionesService {


  private inscripcion: any = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  constructor(private http: HttpClient) { }

  public getInscripciones(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.inscripcion['token'],
      })
    };

    const urlApi: string = "http://localhost:3000/api/inscripciones";
    return this.http.get<any>(urlApi, httpOptions);
  }

  public addInscripcion(dni: string, nroTramiteDni: string, email: string): Observable<any> {
    const urlApi: string = "http://localhost:3000/api/inscripciones";
    return this.http.post<any>(urlApi, { "dni": dni, "nroTramiteDni": nroTramiteDni, "email": email });
  }

  public updateInscripcion(updInscripcion: IInscripcion): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.inscripcion['token'],
      })
    };

    const urlApi: string = "http://localhost:3000/api/inscripciones/" + updInscripcion.id;
    return this.http.put<any>(urlApi, updInscripcion, httpOptions);
  }
}