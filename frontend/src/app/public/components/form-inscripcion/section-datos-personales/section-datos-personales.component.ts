import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';

@Component({
  selector: 'app-section-datos-personales',
  templateUrl: './section-datos-personales.component.html',
  styles: [
  ]
})
export class SectionDatosPersonalesComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

}
