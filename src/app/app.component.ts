import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // This allows us to change background color of entire web page in this component's css.
  // You would think doing * {} in styles.css would work, but because that is outside of the <body> element, it would not be able to access our dark/light color themes.
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'learning-angular-project';
}
