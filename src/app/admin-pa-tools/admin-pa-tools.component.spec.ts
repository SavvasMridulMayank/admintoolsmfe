import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaToolsComponent } from './admin-pa-tools.component';

describe('AdminPaToolsComponent', () => {
  let component: AdminPaToolsComponent;
  let fixture: ComponentFixture<AdminPaToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPaToolsComponent]
    });
    fixture = TestBed.createComponent(AdminPaToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
