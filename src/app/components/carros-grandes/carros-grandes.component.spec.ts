import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosGrandesComponent } from './carros-grandes.component';

describe('CarrosGrandesComponent', () => {
  let component: CarrosGrandesComponent;
  let fixture: ComponentFixture<CarrosGrandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosGrandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosGrandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
