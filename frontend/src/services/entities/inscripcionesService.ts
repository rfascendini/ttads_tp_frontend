import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IInscripcion } from "src/interfaces/Inscripcion.interface";
import { HttpOptions } from "../shared/httpOptions";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class InscripcionesService {

  constructor(private http: HttpClient, private httpOptions: HttpOptions) { }

  private urlApi = environment.apiUrl+environment.apiPort+environment.apiRoot;

  public getInscripciones(): Observable<any> {
    const urlApi: string = this.urlApi+"/inscripciones";
    return this.http.get<any>(urlApi, this.httpOptions.getHttpOptions());
  }

  public addInscripcion(dni: string, nroTramiteDni: string, email: string): Observable<any> {
    const urlApi: string = this.urlApi+"/inscripciones";
    return this.http.post<any>(urlApi, { "dni": dni, "nroTramiteDni": nroTramiteDni, "email": email });
  }

  public updateInscripcion(updInscripcion: IInscripcion): Observable<any> {

    const urlApi: string = this.urlApi+"/inscripciones/" + updInscripcion.id;
    return this.http.put<any>(urlApi, updInscripcion, this.httpOptions.getHttpOptions());
  }
}