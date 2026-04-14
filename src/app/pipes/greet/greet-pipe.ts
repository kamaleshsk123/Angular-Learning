import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet',
})
export class GreetPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return 'Hi, Mr. ' + value + ' your salary is credited';
  }
}
