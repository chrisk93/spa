import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../../servicios/heroes.services';
import {Router} from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private heroesService:HeroesService, private router:Router) {

    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx:number){
    console.log("Eveent "+ idx);
    this.router.navigate(['/heroe',idx]);
  }

}
