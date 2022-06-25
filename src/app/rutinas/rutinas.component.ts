import { Component, OnInit } from '@angular/core';
import { Rutina } from '../rutina';
import { RutinaService } from '../rutina.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})

export class RutinasComponent implements OnInit {
  
  rutinas: Rutina[] = [];
  
  constructor(private rutinaService: RutinaService) { }

  ngOnInit(): void {
    this.getRutinas();
  }

  getRutinas(): void {
    this.rutinaService.getRutinas()
      .subscribe(rutinas => this.rutinas = rutinas);
  }

  borrar(rutina: Rutina): void {
    this.rutinas = this.rutinas.filter(h => h !== rutina);
    this.rutinaService.deleteRutina(rutina.id).subscribe();
  }

}
