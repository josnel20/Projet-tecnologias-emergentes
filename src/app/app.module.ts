import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarrosDeLuxoComponent } from './components/carros-de-luxo/carros-de-luxo.component';
import { CarrosAntigosComponent } from './components/carros-antigos/carros-antigos.component';
import { HomeComponent } from './components/home/home.component';
import { CarrosConversiveisComponent } from './components/carros-conversiveis/carros-conversiveis.component';
import { CarrosGrandesComponent } from './components/carros-grandes/carros-grandes.component';
import { CarrosFamiliaComponent } from './components/carros-familia/carros-familia.component';
import { CarrosDieselComponent } from './components/carros-diesel/carros-diesel.component';
import { CarrosEconomicosComponent } from './components/carros-economicos/carros-economicos.component';
import { CarrosHatchesComponent } from './components/carros-hatches/carros-hatches.component';
import { PicapesComponent } from './components/picapes/picapes.component';
import { SUVsComponent } from './components/suvs/suvs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarrosDeLuxoComponent,
    CarrosAntigosComponent,
    HomeComponent,
    CarrosConversiveisComponent,
    CarrosGrandesComponent,
    CarrosFamiliaComponent,
    CarrosDieselComponent,
    CarrosEconomicosComponent,
    CarrosHatchesComponent,
    PicapesComponent,
    SUVsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
