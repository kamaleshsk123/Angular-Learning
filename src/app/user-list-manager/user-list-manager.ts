import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  submitButton() {
    console.log('Submit Button Clicked');

    if (this.userAge && this.userName) {
      this.users.push({
        name: this.userName,
        age: this.userAge,
      });
    }
    console.log(this.users);
  }
  resetButton() {
    this.userName = '';
    this.userAge = null;
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
