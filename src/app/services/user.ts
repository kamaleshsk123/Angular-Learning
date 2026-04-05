import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  users: {name: string, age:number}[]= []

  addUser(users:{name:string, age:number}){
    this.users.push(users)
  }
  deleteUser(index: number){
    this.users.splice(index)
  }
  showuser(){
    return this.users
  }
}
