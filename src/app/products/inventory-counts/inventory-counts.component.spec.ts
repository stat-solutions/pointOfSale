import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCountsComponent } from './inventory-counts.component';

describe('InventoryCountsComponent', () => {
  let component: InventoryCountsComponent;
  let fixture: ComponentFixture<InventoryCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryCountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
