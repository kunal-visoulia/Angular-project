import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {
  constructor(private http: HttpClient,private msg:MessageService) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
    console.log();
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
getHeroes():Observable<Hero[]>{
  this.msg.add('HeroService:fetched heroes');
  return of(HEROES);
}
}
