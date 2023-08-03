import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultIdeaComponent } from './result-idea.component';

describe('ResultIdeaComponent', () => {
  let component: ResultIdeaComponent;
  let fixture: ComponentFixture<ResultIdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultIdeaComponent]
    });
    fixture = TestBed.createComponent(ResultIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
