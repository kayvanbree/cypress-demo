import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  count = 0;

  onCounterClick() {
    this.count++;
  }

  onAdd2Click() {
    this.count += 2;
  }

  onAdd88Click() {
    this.count += 86;
  }

  reset() {
    this.count = 0;
  }
}
