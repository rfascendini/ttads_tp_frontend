import { Component, OnInit } from '@angular/core';
import { CarrerasService } from 'src/services/carrerasService';

@Component({
  selector: 'app-section-carrera',
  templateUrl: './section-carrera.component.html',
  styles: [
  ]
})
export class SectionCarreraComponent implements OnInit {
  
  carreras: any[] = [];
  inscripcion: any = sessionStorage.getItem('inscripcion')

  constructor (  // LLAMAMOS A LAS VARIABLES QUE SE CONECTAN A LAS API'S
    private carreraService: CarrerasService,
  ) { }

  ngOnInit(): void {
    
    // INICIALIZAMOS LA SESSION
    this.inscripcion = JSON.parse(this.inscripcion);
    
    this.carreras = this.getJsonCarreras()

  }

  // OBTENEMOS TODA LA DATA DE LA BD CON LOS REGISTROS NECESARIOS DE LOS CAMPOS DE LOS FORMULARIOS
  getJsonCarreras() {
    const jsonCarreras: any[] = []
    this.carreraService.getCarreras().subscribe(data => {
      data.forEach((carrera: any) => {
        if (carrera.inscripcionAbierta == 1) { jsonCarreras.push(carrera) }
      });
    })
    return jsonCarreras;
  }

}
