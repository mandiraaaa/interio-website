import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryinsideComponent } from './admin-categoryinside.component';

describe('AdminCategoryinsideComponent', () => {
  let component: AdminCategoryinsideComponent;
  let fixture: ComponentFixture<AdminCategoryinsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryinsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoryinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
