import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suvs',
  templateUrl: './suvs.component.html',
  styleUrls: ['./suvs.component.css']
})
export class SUVsComponent implements OnInit {
  carros: any = [
    {
      foto: 'assets/SUVs/AUDI Q5.PNG',
      produto: 'AUDI Q5'
    },    {
      foto: 'assets/SUVs/CHERY TIGGO 2.PNG',
      produto: 'CHERY TIGGO 2'
    },
    {
      foto: 'assets/SUVs/CHERY TIGGO 5X.PNG',
      produto: 'CHERY TIGGO 5X'
    },
    {
      foto: 'assets/SUVs/FORD BRONCO SPORT.PNG',
      produto: 'FORD BRONCO SPORT'
    },
    {
      foto: 'assets/SUVs/FORD ECOSPORT.PNG',
      produto: 'FORD ECOSPORT'
    },
    {
      foto: 'assets/SUVs/HYUNDAI CRETA.PNG',
      produto: 'HYUNDAI CRETA'
    },
    {
      foto: 'assets/SUVs/NISSAN KICKS.PNG',
      produto: 'NISSAN KICKS'
    },
    {
      foto: 'assets/SUVs/PEUGEOT 3008.PNG',
      produto: 'PEUGEOT 3008'
    },
    {
      foto: 'assets/SUVs/SUZUKI S-CROSS.PNG',
      produto: 'SUZUKI S-CROSS'
    },
    {
      foto: 'assets/SUVs/TOYOTA RAV4.PNG',
      produto: 'TOYOTA RAV4'
    },
    {
      foto: 'assets/SUVs/VOLKSWAGEN TAOS.PNG',
      produto: 'VOLKSWAGEN TAOS'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
