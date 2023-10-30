import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CarrerasService {

  private urlApi = "http://localhost:3000/api/carreras";

  private token: any = sessionStorage.getItem('token')

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token,
    })
  };

  constructor(private http: HttpClient) {

  }

  public getCarreras(): Observable<any> {
    return this.http.get<any>(this.urlApi, this.httpOptions)
  }

}