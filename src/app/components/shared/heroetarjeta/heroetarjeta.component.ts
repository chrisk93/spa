import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroetarjeta.component.html'
})
export class HeroetarjetaComponent implements OnInit {

  @Input()
  heroe:any = {};

  @Input()
  index:number;

  @Output()
  heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter();

   }

  ngOnInit() {
  }

  verHeroe(){
    this.heroeSeleccionado.emit(this.index);
    //this.router.navigate(['/heroe',this.index]);

  }

}
