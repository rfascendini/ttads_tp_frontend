import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CarrerasService {
  
  private urlApi = "http://localhost:3000/api/carreras";

  constructor(private http: HttpClient) {

  }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

}