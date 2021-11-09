import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosEconomicosComponent } from './carros-economicos.component';

describe('CarrosEconomicosComponent', () => {
  let component: CarrosEconomicosComponent;
  let fixture: ComponentFixture<CarrosEconomicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosEconomicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosEconomicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
