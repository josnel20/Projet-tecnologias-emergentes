import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SUVsComponent } from './suvs.component';

describe('SUVsComponent', () => {
  let component: SUVsComponent;
  let fixture: ComponentFixture<SUVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SUVsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SUVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
