import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopwithComponent } from './shopwith.component';

describe('ShopwithComponent', () => {
  let component: ShopwithComponent;
  let fixture: ComponentFixture<ShopwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopwithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
