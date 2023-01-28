import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderinsideComponent } from './admin-orderinside.component';

describe('AdminOrderinsideComponent', () => {
  let component: AdminOrderinsideComponent;
  let fixture: ComponentFixture<AdminOrderinsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderinsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrderinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
