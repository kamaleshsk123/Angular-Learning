import { Component } from '@angular/core';

import { User } from '../services/user';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  // userId: string | null = null
  userData: any = null;
  constructor(private user: User) {
    this.loadUserData();
  }
  ngOnInit() {
    console.log('Single User Page Works');
  }

  loadUserData() {
    const id = this.user.userId;

    if (id !== null) {
      console.log('User Details', id);
      this.userData = this.user.getUserById(id);
      console.log(this.userData);
    }
  }
}
