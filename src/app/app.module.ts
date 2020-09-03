import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import {APP_ROUTING} from './app.routes';

//SERVICIOS
import {HeroesService} from './servicios/heroes.services';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';
import { HeroeComponent } from './components/shared/heroe/heroe.component';
import { AboutComponent } from './components/shared/about/about.component';
import { BuscadorHeroeComponent } from './components/shared/buscadorheroe/buscadorheroe.component';
import { HeroetarjetaComponent } from './components/shared/heroetarjeta/heroetarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BuscadorHeroeComponent,
    HeroetarjetaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
