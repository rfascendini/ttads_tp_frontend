import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
import { ConfiguracionParametrosService } from 'src/services/entities/configuracionParametrosService';
@Component({
  selector: 'app-section-domicilio',
  templateUrl: './section-domicilio.component.html',
  styles: [
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SectionDomicilioComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  constructor(controlContainer: ControlContainer, private configParams: ConfiguracionParametrosService) {
    (controlContainer as NgForm).form;
  }

}
