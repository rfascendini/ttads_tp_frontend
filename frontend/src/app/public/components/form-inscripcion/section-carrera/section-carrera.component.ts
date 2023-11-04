import { Component, OnInit } from '@angular/core';
import { ICarrera } from 'src/interfaces/Carrera.interface';
import { IInscripcion } from 'src/interfaces/Inscripcion.interface';
import { CarrerasService } from 'src/services/entities/carrerasService';

@Component({
  selector: 'app-section-carrera',
  templateUrl: './section-carrera.component.html',
  styles: [
  ]
})
export class SectionCarreraComponent implements OnInit {

  carreras: ICarrera[] = [];
  inscripcion: IInscripcion = JSON.parse(sessionStorage.getItem('inscripcion') as string)

  constructor(  // LLAMAMOS A LAS VARIABLES QUE SE CONECTAN A LAS API'S
    private carreraService: CarrerasService,
  ) { }

  ngOnInit(): void {

    if (this.inscripcion != null) {

      this.carreras = this.getJsonCarreras()
    }

  }

  getJsonCarreras() {
    const jsonCarreras: ICarrera[] = []
    this.carreraService.getCarreras().subscribe(data => {
      data.forEach((carrera: any) => {
        if (carrera.inscripcionAbierta == 1) { jsonCarreras.push(carrera) }
      });
    })
    return jsonCarreras;
  }

}
