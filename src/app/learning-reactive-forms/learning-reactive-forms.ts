import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-learning-reactive-forms',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './learning-reactive-forms.html',
  styleUrl: './learning-reactive-forms.css',
})
export class LearningReactiveForms {
  // Tryout
  // userDetails = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   age: new FormControl('', [Validators.required, Validators.min(1)]),
  // });

  // onSubmit() {
  //   console.log(this.userDetails.value);
  // }

  userInfo = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  onSubmit() {
    console.log(this.userInfo.value);
    this.onReset();
  }
  onReset() {
    this.userInfo.reset();
  }
}
