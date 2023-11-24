import { CanActivateFn, Router } from "@angular/router";
import { AuthTokenService } from "../shared/authTokenService";
import { inject } from "@angular/core";
import { IUsuario } from "src/interfaces/Usuario.interface";

export const authGuardAdmin: CanActivateFn = (route, state) => {

  const user: IUsuario = JSON.parse((sessionStorage.getItem('user') as IUsuario) as string)
  const authService = inject(AuthTokenService)

  if(user != null && authService.verificarToken(String(user.token))) {
    return true;
  } else {
    return false;
  };

}