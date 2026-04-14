import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../services/user';

@Component({
  selector: 'app-user-list-manager',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-list-manager.html',
  styleUrl: './user-list-manager.css',
})
export class UserListManager implements OnInit {
  userName: string = '';
  userAge: number | null = null;
  users: any[] = [];

  constructor(private user: User) {
    this.users = this.user.showUser();
    this.user.getUserFromAPi().subscribe((data: any) => {
      this.users = data;
    });
    console.log(this.users);
  }
  ngOnInit() {
    console.log('User List Page Works Corectly');
  }
  submitButton() {
    console.log(this.user.showUser());
    if (this.userName || this.userAge) {
      this.user.addUser({
        name: this.userName ?? '',
        age: this.userAge ?? null,
      });
    }
    this.resetButton();
  }
  resetButton() {
    this.userName = '';
    this.userAge = null;
  }
  deleteButton(index: number) {
    console.log('Delete Button Clicked');
    this.user.deleteUser(index);
  }
}
