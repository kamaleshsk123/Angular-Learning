import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  addBook(books: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', books);
  }

  updateBook(id: number, books: any) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, books);
  }

  deleteBook(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
