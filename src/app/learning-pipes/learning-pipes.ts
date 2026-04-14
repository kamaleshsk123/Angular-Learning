import { Component } from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { GreetPipe } from '../pipes/greet/greet-pipe';

@Component({
  selector: 'app-learning-pipes',
  imports: [CurrencyPipe, UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, GreetPipe],
  templateUrl: './learning-pipes.html',
  styleUrl: './learning-pipes.css',
})
export class LearningPipes {
  companyName = 'india corp';
  salaryCreditedOn = '2026-09-04';
  salary = 1000;
  email = 'shanmugakamalesh123@gmail.com';
}
