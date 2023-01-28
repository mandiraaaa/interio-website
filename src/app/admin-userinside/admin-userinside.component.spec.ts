import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserinsideComponent } from './admin-userinside.component';

describe('AdminUserinsideComponent', () => {
  let component: AdminUserinsideComponent;
  let fixture: ComponentFixture<AdminUserinsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserinsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
