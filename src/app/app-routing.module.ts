import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarrosAntigosComponent } from './components/carros-antigos/carros-antigos.component';
import { CarrosConversiveisComponent } from './components/carros-conversiveis/carros-conversiveis.component';
import { CarrosDeLuxoComponent } from './components/carros-de-luxo/carros-de-luxo.component';
import { CarrosDieselComponent } from './components/carros-diesel/carros-diesel.component';
import { CarrosEconomicosComponent } from './components/carros-economicos/carros-economicos.component';
import { CarrosFamiliaComponent } from './components/carros-familia/carros-familia.component';
import { CarrosGrandesComponent } from './components/carros-grandes/carros-grandes.component';
import { CarrosHatchesComponent } from './components/carros-hatches/carros-hatches.component';
import { SUVsComponent } from './components/suvs/suvs.component';
import { PicapesComponent } from './components/picapes/picapes.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'carros-antigos', component: CarrosAntigosComponent 
  },
  {
    path: 'carros-diesel', component: CarrosDieselComponent
  },
  {
    path: 'carros-conversiveis', component: CarrosConversiveisComponent 
  },
  {
    path: 'carros-economicos', component: CarrosEconomicosComponent
  },
  {
    path: 'carros-familia', component: CarrosFamiliaComponent 
  },
  {
    path: 'carros-de-luxo', component: CarrosDeLuxoComponent 
  },
  {
    path: 'carros-grandes', component: CarrosGrandesComponent 
  },
  {
    path: 'carros-hatches', component: CarrosHatchesComponent
  },
  {
    path: 'picapes', component: PicapesComponent 
  },
  {
    path: 'SUVs', component: SUVsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
