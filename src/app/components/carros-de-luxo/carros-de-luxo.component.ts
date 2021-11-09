import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-de-luxo',
  templateUrl: './carros-de-luxo.component.html',
  styleUrls: ['./carros-de-luxo.component.css']
})
export class CarrosDeLuxoComponent implements OnInit {
  carros: any = [
    {
      foto: 'assets/carrosLuxo/BMW M6.PNG',
      produto: 'BMW M6'
    },
    {
      foto: 'assets/carrosLuxo/BMW X3.PNG',
      produto: 'BMW X3'
    },
    {
      foto: 'assets/carrosLuxo/JAGUAR F-PACE.PNG',
      produto: 'JAGUAR F-PACE'
    },
    {
      foto: 'assets/carrosLuxo/LAND ROVER VELAR.PNG',
      produto: 'LAND ROVER VELAR'
    },
    {
      foto: 'assets/carrosLuxo/LEXUS NX 300H.PNG',
      produto: 'LEXUS NX 300H'
    },
    {
      foto: 'assets/carrosLuxo/MERCEDES-BENZ C 200.PNG',
      produto: 'MERCEDES-BENZ C 200'
    },
    {
      foto: 'assets/carrosLuxo/MERCEDES-BENZ CLS 400.PNG',
      produto: 'MERCEDES-BENZ CLS 400'
    },
    {
      foto: 'assets/carrosLuxo/MERCEDES-BENZ GLC 250.PNG',
      produto: 'MERCEDES-BENZ GLC 250'
    },
    {
      foto: 'assets/carrosLuxo/PORSCHE MACAN.PNG',
      produto: 'PORSCHE MACAN'
    },
    {
      foto: 'assets/carrosLuxo/VOLVO XC60.PNG',
      produto: 'VOLVO XC60'
    },
    {
      foto: 'assets/carrosLuxo/VOLVO XC90.PNG',
      produto: 'VOLVO XC90'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
