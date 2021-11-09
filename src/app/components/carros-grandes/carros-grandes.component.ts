import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-grandes',
  templateUrl: './carros-grandes.component.html',
  styleUrls: ['./carros-grandes.component.css']
})
export class CarrosGrandesComponent implements OnInit {
  carros: any = [
    {
      foto: 'assets/carrosGrandes/AGRALE MARRUÁ.png',
      produto: 'AGRALE MARRUÁ'
    },
    {
      foto: 'assets/carrosGrandes/AUDI A5 PRESTIGE PLUS.png',
      produto: 'AUDI A5 PRESTIGE PLUS'
    },
    {
      foto: 'assets/carrosGrandes/AUDI Q8 TFSI 3.0.png',
      produto: 'AUDI Q8 TFSI 3.0'
    },
    {
      foto: 'assets/carrosGrandes/FORD RANGER 3.2 XLT.png',
      produto: 'FORD RANGER 3.2 XLT'
    },
    {
      foto: 'assets/carrosGrandes/HUMMER H2.png',
      produto: 'HUMMER H2'
    },
    {
      foto: 'assets/carrosGrandes/HUMMER H3.png',
      produto: 'HUMMER H3'
    },
    {
      foto: 'assets/carrosGrandes/LAMBORGHINI URUS LP650.png',
      produto: 'LAMBORGHINI URUS LP650'
    },
    {
      foto: 'assets/carrosGrandes/TOYOTA HILUX SW4 SR.png',
      produto: 'TOYOTA HILUX SW4 SR'
    },
    {
      foto: 'assets/carrosGrandes/VOLVO V60 MOMENTUM.png',
      produto: 'VOLVO V60 MOMENTUM'
    },
    {
      foto: 'assets/carrosGrandes/VOLVO XC90 T8.png',
      produto: 'VOLVO XC90 T8'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
