import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../services/user';

@Component({
  selector: 'app-user-list-manager',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list-manager.html',
  styleUrl: './user-list-manager.css',
})
export class UserListManager {
  userName: string = '';
  userAge: number | null = null;
  users: { name: string; age: number }[] = [];

  constructor(private user: User) {
    this.users = this.user.showuser();
  }
  submitButton() {
    // if (this.userName && this.userAge) {
    //   this.users.push({
    //     name: this.userName,
    //     age: this.userAge,
    //   });
    // }
    if (this.userName && this.userAge) {
      this.user.addUser({
        name: this.userName,
        age: this.userAge,
      });
    }
    console.log('Show User:', this.user.showuser());
    this.resetButton();
  }
  deleteButton(index: number) {
    this.user.deleteUser(index);
  }
  resetButton() {
    this.userName = '';
    this.userAge = null;
  }
}
