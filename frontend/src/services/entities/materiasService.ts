import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpOptions } from "../shared/httpOptions";

@Injectable({
  providedIn: "root",
})
export class FacultadesService {

  private urlApi = "http://localhost:3000/api/materias";

  constructor(private http: HttpClient, private httpOptions: HttpOptions) { }

  public getMaterias(): Observable<any> {
    return this.http.get<any>(this.urlApi, this.httpOptions.httpOptions)
  }

}