import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InscripcionesService {
  
  private urlApi = "http://localhost:3000/api/inscripciones";

  constructor(private http: HttpClient) {

  }

  public getInscripciones(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

}