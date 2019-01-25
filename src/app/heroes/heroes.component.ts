import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { GetPostsService } from '../get-posts.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
hero:Hero={
  id:1,
  name:'Windstorm'
};
heroes:Hero[];
selectedHero: Hero;

  constructor(private gps: GetPostsService ) { }
// defines a private gps property and identifies it as a HeroService injection site.

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
this.gps.getHeroes().subscribe(heroes=>this.heroes=heroes);  }
}
