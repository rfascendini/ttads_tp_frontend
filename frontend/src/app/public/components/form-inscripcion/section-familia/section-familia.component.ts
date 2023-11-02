import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';

@Component({
  selector: 'app-section-familia',
  templateUrl: './section-familia.component.html',
  styles: [
  ]
})
export class SectionFamiliaComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  // -------------------- SECCION FAMILIA
  padre_vive: string = "";
  madre_vive: string = "";

}
