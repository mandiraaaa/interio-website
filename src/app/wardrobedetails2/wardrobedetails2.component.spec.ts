import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wardrobedetails2Component } from './wardrobedetails2.component';

describe('Wardrobedetails2Component', () => {
  let component: Wardrobedetails2Component;
  let fixture: ComponentFixture<Wardrobedetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wardrobedetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wardrobedetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
