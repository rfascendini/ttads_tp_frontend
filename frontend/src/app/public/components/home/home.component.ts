import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.prueba';
import { CarrerasService } from 'src/services/carrerasService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  data: any[] = [];

  constructor(private apiService: ApiService, private carreraService: CarrerasService) { }

  ngOnInit(): void {
    this.obtenerData();
    this.obtenerCarreras();
  }

  obtenerData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

  obtenerCarreras() {
    this.carreraService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

}




