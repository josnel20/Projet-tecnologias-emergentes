import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosAntigosComponent } from './carros-antigos.component';

describe('CarrosAntigosComponent', () => {
  let component: CarrosAntigosComponent;
  let fixture: ComponentFixture<CarrosAntigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosAntigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosAntigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
