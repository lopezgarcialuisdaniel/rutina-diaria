import { Component, OnInit } from '@angular/core';
import { Rutina } from '../rutina';
import { RutinaService } from '../rutina.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rutinas: Rutina[] = [];

  constructor(private rutinaService: RutinaService) { }

  ngOnInit(): void {
    this.getRutinas();
  }

  getRutinas(): void{
    this.rutinaService.getRutinas()
    .subscribe(rutinas => this.rutinas = rutinas);
  }


}
