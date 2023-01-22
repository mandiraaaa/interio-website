import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shopwith1Component } from './shopwith1.component';

describe('Shopwith1Component', () => {
  let component: Shopwith1Component;
  let fixture: ComponentFixture<Shopwith1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shopwith1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shopwith1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
