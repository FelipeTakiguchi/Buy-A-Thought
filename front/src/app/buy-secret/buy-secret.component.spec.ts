import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySecretComponent } from './buy-secret.component';

describe('BuySecretComponent', () => {
  let component: BuySecretComponent;
  let fixture: ComponentFixture<BuySecretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuySecretComponent]
    });
    fixture = TestBed.createComponent(BuySecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
