import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'convocation-app';
  selectedIndex = 0
  next() {
    if (this.selectedIndex != 4) {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }
  prev() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }
}
