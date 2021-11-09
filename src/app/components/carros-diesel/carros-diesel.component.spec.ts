import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosDieselComponent } from './carros-diesel.component';

describe('CarrosDieselComponent', () => {
  let component: CarrosDieselComponent;
  let fixture: ComponentFixture<CarrosDieselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosDieselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosDieselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
