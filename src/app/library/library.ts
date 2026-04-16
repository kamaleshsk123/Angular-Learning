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
    if (this.book.invalid) return;
    this.bookService.addBook(this.book.value).subscribe({
      next: (res: any) => {
        this.booksList.push(res);
        this.resetData();
      },
      error: (err: any) => {
        console.error('Error', err);
      },
    });
  }

  deleteBook(index: number) {
    console.log(index);
    this.bookService.deleteBook(index).subscribe({
      next: () => {
        const id = this.booksList.findIndex((b) => b.id === index);
        if (id !== -1) {
          this.booksList.splice(id, 1);
        }
      },
    });
    // this.booksList.splice(index, 1);
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
    console.log(this.book.value);
    const updatedBook = this.bookId ?? 0;
    this.booksList[updatedBook] = this.book.value;
    this.showUpdate = false;
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
