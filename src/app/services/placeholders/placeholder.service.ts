import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './Placeholder';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  //url API base
  BASEAPI: string = 'https://jsonplaceholder.typicode.com/';
  USERAPI: string = 'users/';
  COMMENTSAPI: string = 'comments/'
  constructor(private http: HttpClient) { }
  //metodo para traer usuarios
  getUsers() {
    return this.http.get(this.BASEAPI + this.USERAPI);
  }
  getComments(){
    return this.http.get(this.BASEAPI+this.COMMENTSAPI);
  }
}
