import { Component } from '@angular/core';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
@Component({
  selector: 'app-section-discapacidad',
  templateUrl: './section-discapacidad.component.html',
  styles: [
  ]
})
export class SectionDiscapacidadComponent {

  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  // -------------------- SECCION DISCAPACIDAD
  seccion_discapacidad: string = "";

  // SUBSECCIONES DISCAPACIDAD
  seccion_discapacidadNEAEAUDITI: boolean = false;
  seccion_discapacidadNEAEVISUAL: boolean = false;
  seccion_discapacidadNEAEMOTRIZ: boolean = false;
  seccion_discapacidadNEAEPSICOS: boolean = false;
  seccion_discapacidadNEAEOTRAS: boolean = false;

}
