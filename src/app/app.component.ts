import { Component } from '@angular/core';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [DashboardComponent, RouterOutlet]
})
export class AppComponent {
  title = 'Book Rating';
}
