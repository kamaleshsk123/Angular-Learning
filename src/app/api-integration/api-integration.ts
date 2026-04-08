import { Component } from '@angular/core';
import { User } from '../services/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-integration',
  imports: [CommonModule, RouterLink],
  templateUrl: './api-integration.html',
  styleUrl: './api-integration.css',
})
export class ApiIntegration {
  users: any[] = [];
  isLoading = false;
  isError = false;
  neededValue = 5;
  constructor(private user: User) {}
  ngOnInit() {
    this.fetchApi();
    console.log(this.users);
  }
  fetchApi() {
    this.isLoading = true;
    this.isError = false;
    this.user.getUserFromAPi().subscribe({
      next: (data: any) => {
        this.isLoading = false;
        this.users = data.slice(0, this.neededValue);
        this.user.setUser(this.users);
      },
      error: (err: any) => {
        this.isLoading = false;
        this.isError = true;
      },
    });
  }
  detailsButton(id: number) {
    this.user.userIdValue(id);
  }
}
