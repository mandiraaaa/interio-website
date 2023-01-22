import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shopwith2Component } from './shopwith2.component';

describe('Shopwith2Component', () => {
  let component: Shopwith2Component;
  let fixture: ComponentFixture<Shopwith2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shopwith2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shopwith2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
