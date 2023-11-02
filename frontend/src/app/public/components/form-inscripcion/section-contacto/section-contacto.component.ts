import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';

@Component({
  selector: 'app-section-contacto',
  templateUrl: './section-contacto.component.html',
  styles: [
  ]
})
export class SectionContactoComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)
  
}
