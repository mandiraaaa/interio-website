import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shopwith3Component } from './shopwith3.component';

describe('Shopwith3Component', () => {
  let component: Shopwith3Component;
  let fixture: ComponentFixture<Shopwith3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shopwith3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shopwith3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
