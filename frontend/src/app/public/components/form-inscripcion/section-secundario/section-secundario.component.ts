import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';

@Component({
  selector: 'app-section-secundario',
  templateUrl: './section-secundario.component.html',
  styles: [
  ]
})
export class SectionSecundarioComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

    // -------------------- SECCION SECUNDARIO
    secundario_completo: any = null;

}
