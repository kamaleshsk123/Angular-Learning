import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  count1 = 0;
  details: any[] = [];
  books_list = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.details.push(this.books_list.value);
    console.log(this.books_list.value);
    this.reset();
  }

  reset() {
    this.books_list.reset();
  }

  boreButton() {
    this.count1 = this.count1 + 1;
    console.log(this.count1);
  }

  onEdit(index: number) {
    this.books_list.setValue(this.details[index]);
  }

  onDelete(index: number) {
    this.details.splice(index, 1);
  }
}
