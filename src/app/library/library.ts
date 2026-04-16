import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-library',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './library.html',
  styleUrl: './library.css',
})
export class Library {
  booksList: any[] = [];
  searchTerm: string = '';
  showUpdate = false;
  bookId: number | null = null;
  constructor(private bookService: BookService) {}
  book = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
  });
  onSubmit() {
    console.log(this.book.value);
    this.booksList.push(this.book.value);
    this.resetData();
    console.log(this.booksList.length);
  }

  deleteBook(index: number) {
    this.booksList.splice(index, 1);
  }
  resetData() {
    this.book.reset();
  }
  editBook(index: number) {
    this.showUpdate = true;
    this.bookId = index;
    this.book.setValue(this.booksList[index]);
  }

  cancelUpdate() {
    this.showUpdate = false;
    this.resetData();
  }

  updateDetails() {
    this.showUpdate = false;
    console.log(this.bookId);
    if (this.bookId !== null) {
      this.booksList[this.bookId] = this.book.value;
    }
    console.log(this.book.value);
    this.resetData();
  }

  get loadBooks() {
    if (!this.booksList) return [];

    if (!this.searchTerm.trim()) {
      return this.booksList;
    }
    return this.booksList.filter((book) => {
      return book.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
