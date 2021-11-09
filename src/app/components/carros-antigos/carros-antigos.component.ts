import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-antigos',
  templateUrl: './carros-antigos.component.html',
  styleUrls: ['./carros-antigos.component.css']
})
export class CarrosAntigosComponent implements OnInit {
carros: any = [
  {
    foto: 'assets/carrosAntigos/Ford Tudor Hot 1932.png',
    produto: 'Ford Tudor Hot 1932'
  },
  {
    foto: 'assets/carrosAntigos/Dodge Charger Rt V8 1975.png',
    produto: 'Dodge Charger Rt V8 1975'
  },
  {
    foto: 'assets/carrosAntigos/Ford Galaxie Luxo 1976.png',
    produto: 'Ford Galaxie Luxo 1976'
  },
  {
    foto: 'assets/carrosAntigos/Ford Maverick 5.0 Gt Coupé V8 16v 1975.png',
    produto: 'Ford Maverick 5.0 Gt Coupé V8 16v 1975'
  },
  {
    foto: 'assets/carrosAntigos/Ford Mercury Coupe 1946.png',
    produto: 'Ford Mercury Coupe 1946'
  },
  {
    foto: 'assets/carrosAntigos/Ford Ramona 1929.png',
    produto: 'Ford Ramona 1929'
  },
  {
    foto: 'assets/carrosAntigos/Ford Thunderbird M Code 1963 Motor 390 V8 Big Block 335hp.png',
    produto: 'Ford Thunderbird M Code 1963 Motor 390 V8 Big Block 335hp'
  },
  {
    foto: 'assets/carrosAntigos/Camaro Ss 1970 Motor 350 V8 Quadrijet 250hp Manual 4 Marchas.png',
    produto: 'Camaro Ss 1970 Motor 350 V8 Quadrijet 250hp Manual 4 Marchas'
  },
  {
    foto: 'assets/carrosAntigos/Volkswagen Fusca 1.5 8v 1972.png',
    produto: 'Volkswagen Fusca 1.5 8v 1972'
  },
  {
    foto: 'assets/carrosAntigos/Shelby Cobra 5.7 V8 1977.png',
    produto: 'Shelby Cobra 5.7 V8 1977'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
