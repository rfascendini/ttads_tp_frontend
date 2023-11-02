import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';

@Component({
  selector: 'app-section-otros',
  templateUrl: './section-otros.component.html',
  styles: [
  ]
})
export class SectionOtrosComponent {


  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

}
