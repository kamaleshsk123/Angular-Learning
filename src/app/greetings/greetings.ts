import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greetings',
  imports: [FormsModule],
  templateUrl: './greetings.html',
  styleUrl: './greetings.css',
})
export class Greetings {
  userName: string = '';
  userAge: number | null = null;
  isDisable = true;

  // resetButton
  resetButton() {
    this.userAge = null;
    this.userName = '';
    this.isDisable = true;
  }

  // Submit Button
  submitButton() {
    this.isDisable = false;
  }
}
