import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ICarrera } from 'src/interfaces/Carrera.interface';
import { IConfiguracionParametro } from 'src/interfaces/ConfiguracionParametro.interface';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
import { CarrerasService } from 'src/services/entities/carrerasService';
import { ConfiguracionParametrosService } from 'src/services/entities/configuracionParametrosService';

@Component({
  selector: 'app-section-carrera',
  templateUrl: './section-carrera.component.html',
  styles: [
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SectionCarreraComponent {

  carreras: ICarrera[] = [];
  cfgparams_formaingreso: IConfiguracionParametro[] = [];
  cfgparams_lugardecursado: IConfiguracionParametro[] = [];

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  constructor(
    controlContainer: ControlContainer,
    private carreraService: CarrerasService,
    private configParams: ConfiguracionParametrosService) {
    (controlContainer as NgForm).form;
  }

  ngOnInit(): void {

    if (this.inscripcion != null) {

      this.getJsonCarreras()
      this.getCfgParams_carrera();

    }

  }

  getCfgParams_carrera() {
    this.configParams.getConfiguracionParametros().subscribe(data => {
      data.forEach((item: IConfiguracionParametro) => {
        if (item.field === 'formaingreso') { this.cfgparams_formaingreso.push(item) }
        if (item.field === 'lugarcursado') { this.cfgparams_lugardecursado.push(item) }
      });
    }
    )
  }

  getJsonCarreras() {
    this.carreraService.getCarreras().subscribe(data => {
      data.forEach((carrera: ICarrera) => {
        if (carrera.inscripcionAbierta === 1) { this.carreras.push(carrera) }
      });
    })
  }

}
