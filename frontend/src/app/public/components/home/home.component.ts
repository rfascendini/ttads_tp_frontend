import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.prueba';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerData();
  }

  obtenerData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

}




