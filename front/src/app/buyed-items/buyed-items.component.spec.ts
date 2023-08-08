import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyedItemsComponent } from './buyed-items.component';

describe('BuyedItemsComponent', () => {
  let component: BuyedItemsComponent;
  let fixture: ComponentFixture<BuyedItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyedItemsComponent]
    });
    fixture = TestBed.createComponent(BuyedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
