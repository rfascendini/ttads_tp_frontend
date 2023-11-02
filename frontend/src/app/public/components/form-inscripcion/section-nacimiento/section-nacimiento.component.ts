import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';

@Component({
  selector: 'app-section-nacimiento',
  templateUrl: './section-nacimiento.component.html',
  styles: [
  ]
})
export class SectionNacimientoComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

}
