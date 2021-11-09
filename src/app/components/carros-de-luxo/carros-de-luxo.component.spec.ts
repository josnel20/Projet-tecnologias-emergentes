import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosDeLuxoComponent } from './carros-de-luxo.component';

describe('CarrosDeLuxoComponent', () => {
  let component: CarrosDeLuxoComponent;
  let fixture: ComponentFixture<CarrosDeLuxoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosDeLuxoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosDeLuxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
