import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IConfiguracionParametro } from 'src/interfaces/ConfiguracionParametro.interface';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
import { ConfiguracionParametrosService } from 'src/services/entities/configuracionParametrosService';

@Component({
  selector: 'app-section-datos-personales',
  templateUrl: './section-datos-personales.component.html',
  styles: [],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SectionDatosPersonalesComponent {

  cfgparams_alumnosexo: IConfiguracionParametro[] = []
  cfgparams_alumnoestadocivil: IConfiguracionParametro[] = []
  cfgparams_alumnogenero: IConfiguracionParametro[] = []
  cfgparams_alumnotipodocumento: IConfiguracionParametro[] = []
  cfgparams_nacgruposanguineo: IConfiguracionParametro[] = []

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  constructor(controlContainer: ControlContainer, private configParams: ConfiguracionParametrosService) {
    (controlContainer as NgForm).form;
  }

  ngOnInit(): void {

    if (this.inscripcion != null) {

      this.getCfgParams_datosPersonales()

    }
  }

  getCfgParams_datosPersonales() {
    this.configParams.getConfiguracionParametros().subscribe({
      next: (data) => {
        data.forEach((item: IConfiguracionParametro) => {

          if (item.field === 'alumnosexo') { this.cfgparams_alumnosexo.push(item) }
          if (item.field === 'alumnoestadocivil') { this.cfgparams_alumnoestadocivil.push(item) }
          if (item.field === 'alumnogenero') { this.cfgparams_alumnogenero.push(item) }
          if (item.field === 'alumnotipodocumento') { this.cfgparams_alumnotipodocumento.push(item) }
          if (item.field === 'nacgruposanguineo') { this.cfgparams_nacgruposanguineo.push(item) }
        });
      }
    })
  }

}



