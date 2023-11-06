import { Component } from '@angular/core';
import { IConfiguracionParametro } from 'src/interfaces/ConfiguracionParametro.interface.js';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
import { ConfiguracionParametrosService } from 'src/services/entities/configuracionParametrosService';

@Component({
  selector: 'app-section-tecnologia',
  templateUrl: './section-tecnologia.component.html',
  styles: [
  ]
})
export class SectionTecnologiaComponent {

  cfgparams_tecnodondepc: IConfiguracionParametro[] = []
  cfgparams_tecnointernet: IConfiguracionParametro[] = []
  cfgparams_tecnousointernet: IConfiguracionParametro[] = []

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  // -------------------- SECCION TECNOLOGIA
  acceso_internet: string = "";
  acceso_pc: string = "";

  constructor(  // LLAMAMOS A LAS VARIABLES QUE SE CONECTAN A LAS API'S
    private configuracionTecnologia: ConfiguracionParametrosService,
  ) { }

  ngOnInit(): void {
    if (this.inscripcion != null) {
      this.getCfgParams_tecnologia()
    }
  }

  getCfgParams_tecnologia() {
    this.configuracionTecnologia.getConfiguracionParametros().subscribe(data => {
      data.forEach((item: IConfiguracionParametro) => {
        if (item.field == 'tecnodondepc') { this.cfgparams_tecnodondepc.push(item) }
        if (item.field == 'tecnointernet') { this.cfgparams_tecnointernet.push(item) }
        if (item.field == 'tecnousointernet') { this.cfgparams_tecnousointernet.push(item) }
      });
    })
  }

}
