import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picapes',
  templateUrl: './picapes.component.html',
  styleUrls: ['./picapes.component.css']
})
export class PicapesComponent implements OnInit {
  carros: any = [
    {
      foto: 'assets/picapes/CHEVROLET S-10.PNG',
      produto: 'CHEVROLET S-10'
    },
    {
      foto: 'assets/picapes/DODGE RAM 1500.PNG',
      produto: 'DODGE RAM 1500'
    },
    {
      foto: 'assets/picapes/DODGE RAM REBEL 2.PNG',
      produto: 'DODGE RAM REBEL 2'
    },
    {
      foto: 'assets/picapes/FIAT STRADA ADVENTURE.PNG',
      produto: 'FIAT STRADA ADVENTURE'
    },
    {
      foto: 'assets/picapes/FIAT TORO.PNG',
      produto: 'FIAT TORO'
    },
    {
      foto: 'assets/picapes/FORD RANGER.PNG',
      produto: 'FORD RANGER'
    },
    {
      foto: 'assets/picapes/MAHINDRA PICAPE.PNG',
      produto: 'MAHINDRA PICAPE'
    },
    {
      foto: 'assets/picapes/MITSUBISHI L200 TRITON.PNG',
      produto: 'MITSUBISHI L200 TRITON'
    },
    {
      foto: 'assets/picapes/NISSAN FRONTIER XE.PNG',
      produto: 'NISSAN FRONTIER XE'
    },
    {
      foto: 'assets/picapes/TOYOTA HILUX.PNG',
      produto: 'TOYOTA HILUX'
    },
    {
      foto: 'assets/picapes/VOLKSWAGEN AMAROK.PNG',
      produto: 'VOLKSWAGEN AMAROK'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
