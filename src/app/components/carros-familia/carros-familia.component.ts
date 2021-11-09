import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-familia',
  templateUrl: './carros-familia.component.html',
  styleUrls: ['./carros-familia.component.css']
})
export class CarrosFamiliaComponent implements OnInit {
  carros: any = [
    {
      foto: 'assets/carrosFamilia/CHERY ARRIZO 6 GSX.png',
      produto: 'CHERY ARRIZO 6 GSX'
    },
    {
      foto: 'assets/carrosFamilia/CHEVROLET MERIVA.png',
      produto: 'CHEVROLET MERIVA'
    },
    {
      foto: 'assets/carrosFamilia/CHEVROLET SPIN.png',
      produto: 'CHEVROLET SPIN'
    },
    {
      foto: 'assets/carrosFamilia/CITROEN XSARA PICASSO.png',
      produto: 'CITROEN XSARA PICASSO'
    },
    {
      foto: 'assets/carrosFamilia/HYUNDAI AZERA.png',
      produto: 'HYUNDAI AZERA'
    },
    {
      foto: 'assets/carrosFamilia/PEUGEOT 207 SW.png',
      produto: 'PEUGEOT 207 SW'
    },
    {
      foto: 'assets/carrosFamilia/RENAULT DUSTER.png',
      produto: 'RENAULT DUSTER'
    },
    {
      foto: 'assets/carrosFamilia/RENAULT MEGANE GRAND TOUR.png',
      produto: 'RENAULT MEGANE GRAND TOUR'
    },
    {
      foto: 'assets/carrosFamilia/RENAULT SCENIC.png',
      produto: 'RENAULT SCENIC'
    },
    {
      foto: 'assets/carrosFamilia/VOLKSWAGEN T-CROSS HIGHLINE.png',
      produto: 'VOLKSWAGEN T-CROSS HIGHLINE'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
