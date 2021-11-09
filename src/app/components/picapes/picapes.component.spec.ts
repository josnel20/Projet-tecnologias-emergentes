import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicapesComponent } from './picapes.component';

describe('PicapesComponent', () => {
  let component: PicapesComponent;
  let fixture: ComponentFixture<PicapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
