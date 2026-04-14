import { Component } from '@angular/core';
import { User } from '../services/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { filter, find, map, tap } from 'rxjs/operators';

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
  neededValue = 3;
  constructor(private user: User) {}
  ngOnInit() {
    this.fetchApi();
    console.log(this.users);
  }
  fetchApi() {
    this.isLoading = true;
    this.isError = false;
    this.user
      .getUserFromAPi()
      .pipe(
        map((data: any) => data?.slice(0, this.neededValue)),
        tap((data) => console.log(data)),
      )
      .subscribe({
        next: (data: any) => {
          this.isLoading = false;
          this.users = data;
          this.user.setUser(this.users);
          console.log('Api Loading');
        },
        error: (err: any) => {
          this.isError = true;
          this.isLoading = false;
          console.error('Api Broken');
        },
        complete: () => {
          console.log('Api Completed');
        },
      });
  }
  detailsButton(id: number) {
    this.user.userIdValue(id);
  }
}
