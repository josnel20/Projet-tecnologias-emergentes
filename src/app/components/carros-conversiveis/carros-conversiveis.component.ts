import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-conversiveis',
  templateUrl: './carros-conversiveis.component.html',
  styleUrls: ['./carros-conversiveis.component.css']
})
export class CarrosConversiveisComponent implements OnInit {
  carros: any = [
    {
      foto: 'assets/carrosConversiveis/AUDI TTS.png',
      produto: 'AUDI TTS'
    },
    {
      foto: 'assets/carrosConversiveis/PORSCHE 911 CARREIRA .png',
      produto: 'PORSCHE 911 CARREIRA '
    },
    {
      foto: 'assets/carrosConversiveis/PORSCHE 718.png',
      produto: 'PORSCHE 718'
    },
    {
      foto: 'assets/carrosConversiveis/MINI COOPER 2.0 16V TWINPOWER CABRIO STEPTRONIC.png',
      produto: 'MINI COOPER 2.0 16V TWINPOWER CABRIO STEPTRONIC'
    },
    {
      foto: 'assets/carrosConversiveis/MERCEDES BENZ C 300 CABRIOLET.png',
      produto: 'MERCEDES BENZ C 300 CABRIOLET'
    },
    {
      foto: 'assets/carrosConversiveis/LAND ROVER EVOQUE 2.0 HSE DC.png',
      produto: 'LAND ROVER EVOQUE 2.0 HSE DC'
    },
    {
      foto: 'assets/carrosConversiveis/LAMBORGHINI HURACÁN.png',
      produto: 'LAMBORGHINI HURACÁN'
    },
    {
      foto: 'assets/carrosConversiveis/CHEVROLET CAMARO SS CONVERSÍVEL.png',
      produto: 'CHEVROLET CAMARO SS CONVERSÍVEL'
    },
    {
      foto: 'assets/carrosConversiveis/BMW Z4.png',
      produto: 'BMW Z4'
    },
    {
      foto: 'assets/carrosConversiveis/BMW 430i CABRIO SPORT.png',
      produto: 'BMW 430i CABRIO SPORT'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
