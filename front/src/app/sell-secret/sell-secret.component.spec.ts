import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellSecretComponent } from './sell-secret.component';

describe('SellSecretComponent', () => {
  let component: SellSecretComponent;
  let fixture: ComponentFixture<SellSecretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellSecretComponent]
    });
    fixture = TestBed.createComponent(SellSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
