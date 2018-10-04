import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputText = '';
  public output = '';

  public onSubmit(): void {
    this.output = this.inputText;
  }
}
