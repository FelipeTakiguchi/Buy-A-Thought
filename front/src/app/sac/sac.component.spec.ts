import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SACComponent } from './sac.component';

describe('SACComponent', () => {
  let component: SACComponent;
  let fixture: ComponentFixture<SACComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SACComponent]
    });
    fixture = TestBed.createComponent(SACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
