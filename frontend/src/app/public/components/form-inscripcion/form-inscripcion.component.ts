import { Component } from '@angular/core';

@Component({
  selector: 'app-form-inscripcion',
  templateUrl: './form-inscripcion.component.html'
})

export class FormInscripcionComponent {

  // -------------------- SECCION DISCAPACIDAD
  seccion_discapacidad: string = "";

  // SUBSECCIONES DISCAPACIDAD
  seccion_discapacidadNEAEAUDITI: boolean = false;
  seccion_discapacidadNEAEVISUAL: boolean = false;
  seccion_discapacidadNEAEMOTRIZ: boolean = false;
  seccion_discapacidadNEAEPSICOS: boolean = false;
  seccion_discapacidadNEAEOTRAS: boolean = false;

  // -------------------- SECCION TRABAJO
  seccion_trabajo: string = "";

  // -------------------- SECCION SECUNDARIO
  secundario_completo: any = null;

  // -------------------- SECCION UNIVERSITARIO
  titulo_universitario_previo: string = "";
  titulo_universitario_tramite: string = "";

  // -------------------- SECCION DISCAPACIDAD
  acceso_internet: string = "";
  acceso_pc: string = "";

  // -------------------- SECCION FAMILIA
  padre_vive: string = "";
  madre_vive: string = "";



}
