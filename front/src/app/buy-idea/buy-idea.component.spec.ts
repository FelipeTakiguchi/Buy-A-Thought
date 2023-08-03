import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyIdeaComponent } from './buy-idea.component';

describe('BuyIdeaComponent', () => {
  let component: BuyIdeaComponent;
  let fixture: ComponentFixture<BuyIdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyIdeaComponent]
    });
    fixture = TestBed.createComponent(BuyIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
