import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../services/user';

@Component({
  selector: 'app-user-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {
  userList: any;
  constructor(private userService: User) {}
  ngOnInit() {
    this.userList = this.userService.showUser();

    if (this.userList.length === 0) {
      this.userService.getUserFromAPi().subscribe({
        next: (data: any) => {
          this.userList = data;
          this.userService.setUser(this.userList);
        },
      });
    }
  }
  editUser(index: number) {
    console.log(index);
    this.userService.userIdValue(index);
  }
}
