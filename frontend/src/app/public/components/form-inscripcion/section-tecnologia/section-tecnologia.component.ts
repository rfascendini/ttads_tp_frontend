import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';

@Component({
  selector: 'app-section-tecnologia',
  templateUrl: './section-tecnologia.component.html',
  styles: [
  ]
})
export class SectionTecnologiaComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

    // -------------------- SECCION TECNOLOGIA
    acceso_internet: string = "";
    acceso_pc: string = "";

}
