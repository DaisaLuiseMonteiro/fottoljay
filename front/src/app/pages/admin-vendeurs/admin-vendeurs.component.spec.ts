import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVendeursComponent } from './admin-vendeurs.component';

describe('AdminVendeursComponent', () => {
  let component: AdminVendeursComponent;
  let fixture: ComponentFixture<AdminVendeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVendeursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVendeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});