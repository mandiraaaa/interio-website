import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdetails1Component } from './productdetails1.component';

describe('Productdetails1Component', () => {
  let component: Productdetails1Component;
  let fixture: ComponentFixture<Productdetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productdetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productdetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
