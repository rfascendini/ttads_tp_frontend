import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';

@Component({
  selector: 'app-section-estudios',
  templateUrl: './section-estudios.component.html',
  styles: [
  ]
})
export class SectionEstudiosComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

    // -------------------- SECCION UNIVERSITARIO
    titulo_universitario_previo: string = "";
    titulo_universitario_tramite: string = "";

}
