import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSecretComponent } from './result-secret.component';

describe('ResultSecretComponent', () => {
  let component: ResultSecretComponent;
  let fixture: ComponentFixture<ResultSecretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultSecretComponent]
    });
    fixture = TestBed.createComponent(ResultSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
