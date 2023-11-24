import { CanActivateFn, Router } from "@angular/router";
import { AuthTokenService } from "../shared/authTokenService";
import { inject } from "@angular/core";
import { IInscripcion } from "src/interfaces/Inscripcion.interface.js";

export const authGuardForm: CanActivateFn = (route, state) => {

  const inscripcion: IInscripcion = JSON.parse((sessionStorage.getItem('inscripcion') as IInscripcion) as string)
  const authService = inject(AuthTokenService)

  if(inscripcion != null && authService.verificarToken(String(inscripcion.token))) {
    return true;
  } else {
    return false;
  };

}