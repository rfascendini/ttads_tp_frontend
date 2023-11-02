import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';

@Component({
  selector: 'app-section-trabajo',
  templateUrl: './section-trabajo.component.html',
  styles: [
  ]
})
export class SectionTrabajoComponent {

  seccion_trabajo: string = "";

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)
  
}
