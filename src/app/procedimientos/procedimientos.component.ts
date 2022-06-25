import { Component, OnInit } from '@angular/core';
import { Procedimiento } from '../procedimiento';
import { RutinaService } from '../rutina.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrls: ['./procedimientos.component.css']
})

export class ProcedimientosComponent implements OnInit {
  procedimientos: Procedimiento[] = [];

  constructor(
    private route: ActivatedRoute,
    private rutinaService: RutinaService) { }

  ngOnInit(): void {
    this.listaProcedimientos();
  }

  //OBTENER LISTA
  listaProcedimientos(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rutinaService.getProcedimientos(id)
    .subscribe(procedimientos => this.procedimientos = procedimientos);
  }

  //AGREGAR
  crearProcedimiento(idI:string, name: string, descripcion: string, img: string): void {
    //Obtenemos el id de la rutina
    const idR = Number(this.route.snapshot.paramMap.get('id'));

    //Creamos un objeto
    let procedimiento: Procedimiento = {
      id: 0,
      titlePaso: '',
      descripcionPaso: '',
      imgPaso: '',
      rutinaId: 0
    }
    procedimiento.id = Number(idI);
    procedimiento.descripcionPaso = descripcion;
    procedimiento.imgPaso = img;
    procedimiento.rutinaId = idR
    
    //Se verifica que no esten vacios los campos
    if (!name && !descripcion && !img ) { return; }
    this.rutinaService.createProcedimiento(procedimiento)
      .subscribe(procedimientos => { this.procedimientos.push(procedimientos);
      });
  }

  //ELIMINAR
  eliminarProcedimiento(procedimiento: Procedimiento): void {
    this.procedimientos = this.procedimientos.filter(p => p !== procedimiento);
    this.rutinaService.deleteProcedimiento(procedimiento.id).subscribe();
  }

  //MODIFICAR
  editarProcedimiento(procedimiento: Procedimiento){
    let data = {
      id: procedimiento.id,
      titlePaso: 'REALIZADO',
      descripcionPaso: procedimiento.descripcionPaso,
      imgPaso: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Light_green_check.svg',
      rutinaId: procedimiento.rutinaId 
    }
    this.rutinaService.updateProcedimiento(procedimiento.id,data).subscribe((response)=>{
      this.listaProcedimientos();
    },(error=>{

    }));



  }
}
