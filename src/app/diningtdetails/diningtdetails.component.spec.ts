import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningtdetailsComponent } from './diningtdetails.component';

describe('DiningtdetailsComponent', () => {
  let component: DiningtdetailsComponent;
  let fixture: ComponentFixture<DiningtdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningtdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiningtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
