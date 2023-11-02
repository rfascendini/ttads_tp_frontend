import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
@Component({
  selector: 'app-section-domicilio',
  templateUrl: './section-domicilio.component.html',
  styles: [
  ]
})
export class SectionDomicilioComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

}
