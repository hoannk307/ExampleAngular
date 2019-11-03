import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Entity/User';


const api = "https://jsonplaceholder.typicode.com/users";

@Injectable({
  providedIn: 'root'
})

export class ServiceUserService {

  constructor(private http: HttpClient) {

  }


  getAllUser(){
    //https://jsonplaceholder.typicode.com/users
    return this.http.get<User[]>(api);
  }
}
