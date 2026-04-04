import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  message = ''; // Interpolation

  // Property Binding
  isDisable = false;
  propertyBinding() {
    console.log('Property Binding Works!');
  }
  toggleButton() {
    //Event Binding
    this.isDisable = !this.isDisable;
    this.message = 'Hello, Kamalesh'; // Two Way Binding
  }

  users = [
    { id: 1, name: 'Kamalesh' },
    { id: 2, name: 'Sk' },
    { id: 3, name: 'Shanmuga Kamalesh' },
    { id: 4, name: 'Shanmuga' },
  ];

  isOnline = true;

  age = 18;

  isActive = false;
}
