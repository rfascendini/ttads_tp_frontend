
import { Injectable } from "@angular/core";
import { ConfiguracionParametrosService } from "src/services/entities/configuracionParametrosService";

@Injectable({
  providedIn: "root",
})

export class ConfigParamsSharedData {

  // LLAMAMOS A LAS VARIABLES QUE SE CONECTAN A LAS API'S
  constructor(private configParams: ConfiguracionParametrosService,) {
    
  }

}
