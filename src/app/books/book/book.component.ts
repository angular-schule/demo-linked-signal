import { Component, input, output } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent {

  book = input.required<Book>();

  rateUp = output<Book>();
  rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }
}
