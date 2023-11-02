import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
@Component({
  selector: 'app-section-deporte',
  templateUrl: './section-deporte.component.html',
  styles: [
  ]
})
export class SectionDeporteComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

}
