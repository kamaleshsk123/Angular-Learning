import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManager } from './task-manager';

describe('TaskManager', () => {
  let component: TaskManager;
  let fixture: ComponentFixture<TaskManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle action menu for a specific task', () => {
    component.taskList = [{ title: 'Task 1' }, { title: 'Task 2' }];
    
    // Initially null
    expect(component.showActionIndex).toBeNull();

    // Toggle Task 1
    component.taskAction(0);
    expect(component.showActionIndex).toBe(0);

    // Toggle Task 2
    component.taskAction(1);
    expect(component.showActionIndex).toBe(1);

    // Toggle Task 2 again (should close)
    component.taskAction(1);
    expect(component.showActionIndex).toBeNull();
  });
});
