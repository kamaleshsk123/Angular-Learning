import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient) {}
  users: any[] = [];
  userId: number | null = null;
  addUser(user: { name: string; age: number | null }) {
    const newId = this.users.length + 1;
    this.users.push({ ...user, id: newId });
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
  showUser() {
    return this.users;
  }
  userIdValue(id: number) {
    this.userId = id;
  }
  setUser(user: any) {
    this.users = user;
  }
  getUserFromAPi() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUserById(id: number) {
    console.log('Value', id);
    if (!this.users) return null;
    const foundValue = this.users.find((user) => user.id === id);
    return foundValue;
  }
}
