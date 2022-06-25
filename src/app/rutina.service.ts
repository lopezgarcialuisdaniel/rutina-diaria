import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

import { Rutina } from './rutina';
import { Procedimiento } from './procedimiento';

@Injectable({ providedIn: 'root' })

export class RutinaService {
  private rutinasUrl = 'http://localhost:3000/rutina';  // URL para mostrar rutinas
  private procedimientosUrl = 'http://localhost:3000/procedimiento';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  //Obtener todas las rutinas 
  getRutinas(): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(this.rutinasUrl)
  }

  //Obtener una rutina
  getRutina(id: Number ): Observable<Rutina> {
    const url = `${this.rutinasUrl}/${id}`;
    return this.http.get<Rutina>(url);
  }

  //Eliminar una rutina
  deleteRutina(id: number): Observable<Rutina> {
    const url = `${this.rutinasUrl}/${id}`;
    return this.http.delete<Rutina>(url, this.httpOptions);
  }
  
  //----------------- PROCEDIMIENTOS ------------------------------------//
  //Obtener los procedimientos
  getProcedimientos(id: number): Observable<Procedimiento[]> {
    const url = `${this.rutinasUrl}/${id}/procedimiento`
    return this.http.get<Procedimiento[]>(url)
  }
  
  // Crear procedimiento
  createProcedimiento(procedimiento: Procedimiento): Observable<Procedimiento> {
    return this.http.post<Procedimiento>(
      this.procedimientosUrl, procedimiento, this.httpOptions);
  }

  //Eliminar procedimiento
  deleteProcedimiento(idP: number ): Observable<Procedimiento> {
    const url = `${this.procedimientosUrl}/${idP}`;
    return this.http.delete<Procedimiento>(url, this.httpOptions);
  }

  //Modificar procedimiento
  updateProcedimiento(id: number, procedimiento: Procedimiento): Observable<any> {
    const url = `${this.procedimientosUrl}/${id}`;
    return this.http.put(url, procedimiento, this.httpOptions);
  }
}
