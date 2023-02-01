import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofadetailsComponent } from './sofadetails.component';

describe('SofadetailsComponent', () => {
  let component: SofadetailsComponent;
  let fixture: ComponentFixture<SofadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofadetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SofadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
