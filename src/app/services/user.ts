import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient) {}
  users: { name: string; age: number | null; }[] = [];
  addUser(users: { name: string; age: number | null }) {
    this.users.push(users);
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
  showUser() {
    return this.users;
  }
  getUserFromAPi() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
