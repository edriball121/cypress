import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  //Definir la url a la que se va ha conectar para acceder al backend
  private FBTarjeta = 'https://localhost:44354/';
  //definir las apis a las que vamos a acceder
  //para definir estas url de manera global los podemos almacenar en enviroment/
  private FBTarjetaApi = 'api/Tarjeta/';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.http);
    console.log(this.FBTarjeta);
    console.log(this.FBTarjetaApi);
    console.log(this.getListTarjetas);
  }
  //crear metodo para acceder a la api
  getListTarjetas(): Observable<any>{
    //le envio por parametro la conexión al back y a la api
    return this.http.get(this.FBTarjeta + this.FBTarjetaApi);
  }

  deleteTarjeta(id: number):Observable<any>{
    return this.http.delete(this.FBTarjeta + this.FBTarjetaApi + id)
  }
}
