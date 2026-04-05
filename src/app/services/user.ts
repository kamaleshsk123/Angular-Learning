import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  users: { name: string; age: number | null }[] = [];
  addUser(users: { name: string; age: number | null }) {
    this.users.push(users);
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
  showUser() {
    return this.users;
  }
}
