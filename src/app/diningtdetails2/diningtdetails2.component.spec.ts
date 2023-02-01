import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diningtdetails2Component } from './diningtdetails2.component';

describe('Diningtdetails2Component', () => {
  let component: Diningtdetails2Component;
  let fixture: ComponentFixture<Diningtdetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Diningtdetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diningtdetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
