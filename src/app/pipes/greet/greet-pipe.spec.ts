import { GreetPipe } from '../greet/greet-pipe';

describe('GreetPipe', () => {
  it('create an instance', () => {
    const pipe = new GreetPipe();
    expect(pipe).toBeTruthy();
  });
});
