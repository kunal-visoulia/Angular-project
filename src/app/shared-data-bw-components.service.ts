import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class SharedDataBwComponentsService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }

  firstClick(){
    return console.log("services ran");
  }

}
