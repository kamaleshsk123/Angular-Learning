import { Component } from '@angular/core';
import { User } from '../services/user';

@Component({
  selector: 'app-edit-user',
  imports: [],
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
}
