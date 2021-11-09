import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-hatches',
  templateUrl: './carros-hatches.component.html',
  styleUrls: ['./carros-hatches.component.css']
})
export class CarrosHatchesComponent implements OnInit {
  carros: any = [
    {
      foto: 'assets/carrosHatches/AUDI A3.PNG',
      produto: 'AUDI A3'
    },
    {
      foto: 'assets/carrosHatches/AUDI RS3.PNG',
      produto: 'AUDI RS3'
    },
    {
      foto: 'assets/carrosHatches/BMW 125i.PNG',
      produto: 'BMW 125i'
    },
    {
      foto: 'assets/carrosHatches/BMW M 140i.PNG',
      produto: 'BMW M 140i'
    },
    {
      foto: 'assets/carrosHatches/MINI COOPER TWINPOWER.PNG',
      produto: 'MINI COOPER TWINPOWER'
    },
    {
      foto: 'assets/carrosHatches/NISSAN LEAF.PNG',
      produto: 'NISSAN LEAF'
    },
    {
      foto: 'assets/carrosHatches/PEUGEOT 208.PNG',
      produto: 'PEUGEOT 208'
    },
    {
      foto: 'assets/carrosHatches/SUBARU XV.PNG',
      produto: 'SUBARU XV'
    },
    {
      foto: 'assets/carrosHatches/VOLKSWAGEN POLO.PNG',
      produto: 'VOLKSWAGEN POLO'
    },
    {
      foto: 'assets/carrosHatches/VOLVO V40.PNG',
      produto: 'VOLVO V40'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
