import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../../servicios/heroes.services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buscadorheroe',
  templateUrl: './buscadorheroe.component.html'
})
export class BuscadorHeroeComponent implements OnInit {

  heroesEncontrados:any[] = [];
  termino:string;

  constructor(private heroesService: HeroesService, private activatedRoute:ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['termino']); // el nombre del parametro debe ser igual al enviado desde app.routes.ts
      this.termino = params['termino'];
      this.heroesEncontrados = this.heroesService.buscarHeroes(params['termino']);
      console.log(this.heroesEncontrados);
    });
  }

  verHeroe1(idx:number){
    console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }

}
