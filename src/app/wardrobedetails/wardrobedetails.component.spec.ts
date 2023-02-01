import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobedetailsComponent } from './wardrobedetails.component';

describe('WardrobedetailsComponent', () => {
  let component: WardrobedetailsComponent;
  let fixture: ComponentFixture<WardrobedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardrobedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WardrobedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
