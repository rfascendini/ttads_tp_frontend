import { Component, OnInit } from '@angular/core';
import { CarrerasService } from 'src/services/carrerasService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  data: any[] = [];

  constructor(private carreraService: CarrerasService) { }

  ngOnInit(): void {
    this.obtenerCarreras();
  }

  obtenerCarreras() {
    this.carreraService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }


}




