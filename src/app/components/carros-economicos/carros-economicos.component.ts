import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-economicos',
  templateUrl: './carros-economicos.component.html',
  styleUrls: ['./carros-economicos.component.css']
})
export class CarrosEconomicosComponent implements OnInit {
  carros: any = [
    {
      foto: 'assets/carrosEconomicos/CHEVROLET JOY.png',
      produto: 'CHEVROLET JOY'
    },
    {
      foto: 'assets/carrosEconomicos/CHEVROLET ONIX.png',
      produto: 'CHEVROLET ONIX'
    },
    {
      foto: 'assets/carrosEconomicos/FIAT ARGO.png',
      produto: 'FIAT ARGO'
    },
    {
      foto: 'assets/carrosEconomicos/FIAT MOBI.png',
      produto: 'FIAT MOBI'
    },
    {
      foto: 'assets/carrosEconomicos/FIAT UNO.png',
      produto: 'FIAT UNO'
    },
    {
      foto: 'assets/carrosEconomicos/FORD KA.png',
      produto: 'FORD KA'
    },
    {
      foto: 'assets/carrosEconomicos/HYUNDAI HB20.png',
      produto: 'HYUNDAI HB20'
    },
    {
      foto: 'assets/carrosEconomicos/RENAULT KWID.png',
      produto: 'RENAULT KWID'
    },
    {
      foto: 'assets/carrosEconomicos/VOLKSWAGEN GOL .png',
      produto: 'VOLKSWAGEN GOL'
    },
    {
      foto: 'assets/carrosEconomicos/VOLKSWAGEN UP!.png',
      produto: 'VOLKSWAGEN UP!'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
