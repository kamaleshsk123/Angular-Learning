import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPipes } from './learning-pipes';

describe('LearningPipes', () => {
  let component: LearningPipes;
  let fixture: ComponentFixture<LearningPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningPipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
