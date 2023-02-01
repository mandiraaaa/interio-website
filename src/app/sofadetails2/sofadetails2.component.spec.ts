import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sofadetails2Component } from './sofadetails2.component';

describe('Sofadetails2Component', () => {
  let component: Sofadetails2Component;
  let fixture: ComponentFixture<Sofadetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sofadetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sofadetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
