import { Component } from '@angular/core';

@Component({
  selector: 'app-section-discapacidad',
  templateUrl: './section-discapacidad.component.html',
  styles: [
  ]
})
export class SectionDiscapacidadComponent {


  // -------------------- SECCION DISCAPACIDAD
  seccion_discapacidad: string = "";

  // SUBSECCIONES DISCAPACIDAD
  seccion_discapacidadNEAEAUDITI: boolean = false;
  seccion_discapacidadNEAEVISUAL: boolean = false;
  seccion_discapacidadNEAEMOTRIZ: boolean = false;
  seccion_discapacidadNEAEPSICOS: boolean = false;
  seccion_discapacidadNEAEOTRAS: boolean = false;

}
