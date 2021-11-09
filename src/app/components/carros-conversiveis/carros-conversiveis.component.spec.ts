import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosConversiveisComponent } from './carros-conversiveis.component';

describe('CarrosConversiveisComponent', () => {
  let component: CarrosConversiveisComponent;
  let fixture: ComponentFixture<CarrosConversiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosConversiveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosConversiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
