import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesledgerComponent } from './salesledger.component';

describe('SalesledgerComponent', () => {
  let component: SalesledgerComponent;
  let fixture: ComponentFixture<SalesledgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesledgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
