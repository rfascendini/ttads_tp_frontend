import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IInscripcion } from "src/interfaces/Inscripcion.interface.js";

@Injectable({
  providedIn: "root",
})

export class HttpOptions {

  inscripcion: IInscripcion = JSON.parse((sessionStorage.getItem('inscripcion') as IInscripcion) as string) || "error"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': String(this.inscripcion['token']),
    })
  };

}

