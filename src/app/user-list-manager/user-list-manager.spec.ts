import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListManager } from './user-list-manager';

describe('UserListManager', () => {
  let component: UserListManager;
  let fixture: ComponentFixture<UserListManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
