import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-diesel',
  templateUrl: './carros-diesel.component.html',
  styleUrls: ['./carros-diesel.component.css']
})
export class CarrosDieselComponent implements OnInit {
  carros: any = [
    {
      foto: 'assets/carrosDiesel/CHEVROLET TRAILBLAZER 2.8 PREMIER 4X4.png',
      produto: 'CHEVROLET TRAILBLAZER 2.8 PREMIER 4X4'
    },

    {
      foto: 'assets/carrosDiesel/Dodge RAM 1500 5.7 V8 DIESEL 4X4 .png',
      produto: 'Dodge RAM 1500 5.7 V8 DIESEL 4X4'
    },

    {
      foto: 'assets/carrosDiesel/FIAT TORO 2.0 TURBO DIESEL ULTRA .png',
      produto: 'FIAT TORO 2.0 TURBO DIESEL ULTRA '
    },

    {
      foto: 'assets/carrosDiesel/JEEP COMPASS 2.0 TURBO DIESEL LONGITUDE AT9.png',
      produto: 'JEEP COMPASS 2.0 TURBO DIESEL LONGITUDE AT9'
    },

    {
      foto: 'assets/carrosDiesel/LAND ROVER - RANGE ROVER SPORT 3.0 HSE 4X4 TURBO DIESEL.png',
      produto: 'LAND ROVER - RANGE ROVER SPORT 3.0 HSE 4X4 TURBO DIESEL'
    },

    {
      foto: 'assets/carrosDiesel/MITSUBISHI PAJERO SPORT 2.4 16V .png',
      produto: 'MITSUBISHI PAJERO SPORT 2.4 16V'
    },

    {
      foto: 'assets/carrosDiesel/NISSAN FRONTIER 2.3 16V DIESEL 4X4.png',
      produto: 'NISSAN FRONTIER 2.3 16V DIESEL 4X4'
    },

    {
      foto: 'assets/carrosDiesel/TOYOTA HILUX SW4 2.8 SRX 4X4 7 LUGARES.png',
      produto: 'TOYOTA HILUX SW4 2.8 SRX 4X4 7 LUGARES'
    },

    {
      foto: 'assets/carrosDiesel/VOLKSWAGEN AMAROK 2.0 HIGHLINE 4X4.png',
      produto: 'VOLKSWAGEN AMAROK 2.0 HIGHLINE 4X4'
    },

    {
      foto: 'assets/carrosDiesel/CHEVROLET TRAILBLAZER 2.8 PREMIER 4X4.png',
      produto: 'CHEVROLET TRAILBLAZER 2.8 PREMIER 4X4'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
