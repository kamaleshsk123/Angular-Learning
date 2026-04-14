import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  userList: any[] = [];
  searchTerm: string = '';

  userInfo = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    this.userList.push(this.userInfo.value);
    console.log(this.userInfo.value);
    this.onReset();
  }

  get searchedUser() {
    if (!this.userList) return [];
    if (!this.searchTerm.trim()) {
      return this.userList;
    }
    return this.userList.filter((user) => {
      return user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
  onReset() {
    this.userInfo.reset();
  }
  deleteUser(index: number) {
    this.userList.splice(index, 1);
  }
}
