import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeta } from '../services/Tarjeta'

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  //propiedad para instanciar/declarar la cadena de conexión a la api rest c#
  API: string = 'https://localhost:44354/api/Tarjeta/';
  constructor(private http: HttpClient) { }

  //metodo para traer tarjetas
  getTarjetas() {
    return this.http.get(this.API);
  }
  //metodo para agregar tarjeta
  AddTarjeta(tarjeta: any): Observable<any> {
    return this.http.post(this.API, tarjeta);
  }

  //metodo para editar tarjetas
  editTarjeta(id: number, tarjeta:any):Observable<any> {
    return this.http.put(this.API + id,tarjeta);
  }

  //metodo para eliminar tarjetas
  deleteTarjeta(id: number): Observable<any> {
    return this.http.delete(this.API + id);
  }
}
