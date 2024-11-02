import { Component, signal } from '@angular/core';

import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [BookComponent]
})
export class DashboardComponent {

  books = signal<Book[]>([]);

  constructor(private rs: BookRatingService) {
    this.books.set([
      {
        isbn: '123',
        title: 'Angular',
        description: 'The big practice book – basics, advanced topics and best practices.',
        price: 36.9,
        rating: 5
      },
      {
        isbn: '456',
        title: 'Vue.js',
        description: 'The green framework',
        price: 32.9,
        rating: 3
      }
    ]);
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateAndSortList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    this.books.update(books => books.map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating));
  }
}
