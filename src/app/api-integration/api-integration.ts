import { Component } from '@angular/core';
import { User } from '../services/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-integration',
  imports: [CommonModule],
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
  }
  fetchApi() {
    this.isLoading = true;
    this.isError = false;
    this.user.getUserFromAPi().subscribe({
      next: (data: any) => {
        this.users = data.slice(0, this.neededValue);
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        this.isError = true;
      },
    });
    console.log(this.users);
  }
}
