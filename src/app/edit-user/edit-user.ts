import { Component } from '@angular/core';
import { User } from '../services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {
  userDetails: any;
  constructor(private userService: User) {
    this.loadSingleUser();
  }

  loadSingleUser() {
    const id = this.userService.userId;

    if (id !== null) {
      this.userDetails = this.userService.getUserById(id);
    }
  }
  saveUser() {
    console.log(this.userDetails);
  }
}
