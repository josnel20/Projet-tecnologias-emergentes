import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosFamiliaComponent } from './carros-familia.component';

describe('CarrosFamiliaComponent', () => {
  let component: CarrosFamiliaComponent;
  let fixture: ComponentFixture<CarrosFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosFamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
