import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../services/user';

@Component({
  selector: 'app-user-list-manager',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-list-manager.html',
  styleUrl: './user-list-manager.css',
})
export class UserListManager {
  userName: string = '';
  userAge: number | null = null;
  users: any;
  // users: { name: string; age: number | null }[];

  constructor(private user: User) {
    // this.users = this.user.showUser();
    //Api Tryout
    this.user.getUserFromApi().subscribe((data: any) => {
      this.users = data;
    });
  }
  submitButton() {
    console.log(this.user.showUser());
    if (this.userName || this.userAge) {
      this.user.addUser({
        name: this.userName,
        age: this.userAge,
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
