import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() name: string = '';
  @Output() greetingsMessage = new EventEmitter<string>();

  greetings() {
    this.greetingsMessage.emit('Hi, How are You?');
  }
}
