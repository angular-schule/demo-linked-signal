import { Component } from '@angular/core';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { BookListComponent } from './books/book-list/book-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [DashboardComponent, BookListComponent]
})
export class AppComponent {
  title = 'Book Rating';
}
