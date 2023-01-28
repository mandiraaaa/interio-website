import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemsinsideComponent } from './admin-itemsinside.component';

describe('AdminItemsinsideComponent', () => {
  let component: AdminItemsinsideComponent;
  let fixture: ComponentFixture<AdminItemsinsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemsinsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminItemsinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
