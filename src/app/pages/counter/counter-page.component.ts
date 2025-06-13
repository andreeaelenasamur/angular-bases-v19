import { Component, signal } from "@angular/core";

@Component({
  selector: '',
  templateUrl: 'counter-page.component.html',
  imports: [],
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
})

export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10);

  constructor() {
  }

  increaseBy(value: number) {
    this.counter = this.counter + value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update( current => current + value );
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
