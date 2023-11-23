import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpOptions } from "../shared/httpOptions";

@Injectable({
  providedIn: "root",
})
export class EntidadesEducativasService {

  private urlApi = "http://localhost:3000/api/entidadesEducativas";

  constructor(private http: HttpClient, private httpOptions: HttpOptions) { }

  public getEntidadesEducativas(): Observable<any> {

    return this.http.get<any>(this.urlApi, this.httpOptions.httpOptions)
  }

}