import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosHatchesComponent } from './carros-hatches.component';

describe('CarrosHatchesComponent', () => {
  let component: CarrosHatchesComponent;
  let fixture: ComponentFixture<CarrosHatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosHatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosHatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
