import { Component, OnInit, Input } from '@angular/core';
import { Rutina } from '../rutina';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RutinaService } from '../rutina.service';

@Component({
  selector: 'app-rutina-detalle',
  templateUrl: './rutina-detalle.component.html',
  styleUrls: ['./rutina-detalle.component.css']
})

export class RutinaDetalleComponent implements OnInit {
  //Declaramos la variable 
  rutina: Rutina | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private rutinaService: RutinaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRutina();
  }

  getRutina(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rutinaService.getRutina(id)
    .subscribe(rutina => this.rutina = rutina);
  }

  regresar(): void {
    this.location.back();
  }

}
