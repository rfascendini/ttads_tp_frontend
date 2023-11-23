import { Component } from '@angular/core';
import { IConfiguracionParametro } from 'src/interfaces/ConfiguracionParametro.interface';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
import { ConfiguracionParametrosService } from 'src/services/entities/configuracionParametrosService';

@Component({
  selector: 'app-section-casa',
  templateUrl: './section-casa.component.html',
  styles: [
  ]
})
export class SectionCasaComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  cfgparams_casamediotraslado: IConfiguracionParametro[] = []
  cfgparams_casacondicion: IConfiguracionParametro[] = []
  cfgparams_casatipo: IConfiguracionParametro[] = []

  // -------------------- SECCION TECNOLOGIA
  acceso_internet: string = "";
  acceso_pc: string = "";

  constructor(  // LLAMAMOS A LAS VARIABLES QUE SE CONECTAN A LAS API'S
    private configuracionCasa: ConfiguracionParametrosService,
  ) { }

  ngOnInit(): void {
    if (this.inscripcion != null) {

      this.getCfgParams_casa()

    }
  }

  getCfgParams_casa() {
    this.configuracionCasa.getConfiguracionParametros().subscribe(data => {
      data.forEach((item: IConfiguracionParametro) => {
        if (item.field === 'casamediotraslado') { this.cfgparams_casamediotraslado.push(item) }
        if (item.field === 'casacondicion') { this.cfgparams_casacondicion.push(item) }
        if (item.field === 'casatipo') { this.cfgparams_casatipo.push(item) }
      });
    })
  }


}
