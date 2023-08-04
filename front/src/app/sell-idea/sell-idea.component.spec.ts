import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellIdeaComponent } from './sell-idea.component';

describe('SellIdeaComponent', () => {
  let component: SellIdeaComponent;
  let fixture: ComponentFixture<SellIdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellIdeaComponent]
    });
    fixture = TestBed.createComponent(SellIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
