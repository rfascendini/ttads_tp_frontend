import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { IInscripcion } from "src/interfaces/Inscripcion.interface.js";

@Injectable({
  providedIn: "root",
})

export class HttpOptions implements OnInit {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as IInscripcion as string)

  ngOnInit(): void {
    this.getHttpOptions()
  }

  getHttpOptions() {

    if (this.inscripcion != null) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': String(this.inscripcion['token']),
        })
      };
      return httpOptions
    } else {
      const httpOptions = undefined
      return httpOptions
    }
  }



}

