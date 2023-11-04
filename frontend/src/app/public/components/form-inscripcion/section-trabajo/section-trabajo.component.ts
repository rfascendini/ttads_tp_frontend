import { Component } from '@angular/core';
import { IConfiguracionParametro } from 'src/interfaces/ConfiguracionParametro.interface.js';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
import { ConfiguracionParametrosService } from 'src/services/entities/configuracionParametrosService';

@Component({
  selector: 'app-section-trabajo',
  templateUrl: './section-trabajo.component.html',
  styles: [
  ]
})
export class SectionTrabajoComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  cfgparams_tipotrabajo: IConfiguracionParametro[] = []
  cfgparams_trabajoocupacion: IConfiguracionParametro[] = []
  cfgparams_trabajohoras: IConfiguracionParametro[] = []
  cfgparams_trabajorelcarrera: IConfiguracionParametro[] = []
  cfgparams_tipoocupacion: IConfiguracionParametro[] = []

  // -------------------- SECCION TRABAJO
  seccion_trabajo: string = "";

  constructor(  // LLAMAMOS A LAS VARIABLES QUE SE CONECTAN A LAS API'S
    private configuracionTecnologia: ConfiguracionParametrosService,
  ) { }

  ngOnInit(): void {
    if (this.inscripcion != null) {
      this.getCfgParams_trabajo()
    }
  }

  getCfgParams_trabajo() {
    this.configuracionTecnologia.getConfiguracionParametros().subscribe(data => {
      data.forEach((item: IConfiguracionParametro) => {
        if (item.field == 'tipotrabajo')        { this.cfgparams_tipotrabajo.push(item) }
        if (item.field == 'trabajoocupacion')   { this.cfgparams_trabajoocupacion.push(item) }
        if (item.field == 'trabajohoras')       { this.cfgparams_trabajohoras.push(item) }
        if (item.field == 'trabajorelcarrera')  { this.cfgparams_trabajorelcarrera.push(item) }
        if (item.field == 'tipoocupacion')      { this.cfgparams_tipoocupacion.push(item) }
      });
    })
    return[this.cfgparams_tipotrabajo,
          this.cfgparams_trabajoocupacion,
          this.cfgparams_trabajohoras, 
          this.cfgparams_trabajorelcarrera, 
          this.cfgparams_tipoocupacion
          ];
  }

}
