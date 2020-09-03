import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HeroesService,Heroe} from '../../../servicios/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  //heroe:any = {};
  heroe:Heroe;


  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      console.log("Hola "+ params['id']); // el nombre del parametro debe ser igual al enviado desde app.routes.ts
      this.heroe = this.heroesService.getheroe(params['id']);
      console.log(this.heroe);
    });

  }


  volverHome(){
    this.router.navigate(['heroes']);
  }

}
