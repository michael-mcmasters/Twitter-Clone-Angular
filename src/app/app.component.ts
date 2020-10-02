import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning-angular-project';
  prevScrollPosition: number;
  amountScrolledSinceLastCall: Function;

  constructor() {
  }

  ngOnInit(): void {
    this.amountScrolledSinceLastCall = this.getScrollSpeed();
    this.onScrollListener();
  }

  // Makes sidebar on right scroll even when mouse isn't hovering over it.
  onScrollListener(): void {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const element = document.getElementById("right-side-container");

      // Scrolled down
      if (scrollPosition > this.prevScrollPosition) {
        element.scrollBy(0, this.amountScrolledSinceLastCall());
      }
      // Scrolled up
      else if (scrollPosition < this.prevScrollPosition) {
        element.scrollBy(0, this.amountScrolledSinceLastCall());
      }
      this.prevScrollPosition = scrollPosition;
    })
  }

  // This is a closure (see notes). getScrollSpeed() returns the function inside of it.
  // When the inner function is called, it can access the properties of its outer function, getScrollSpeed.
  // (Function based off of: https://stackoverflow.com/questions/22593286/detect-measure-scroll-speed).
  getScrollSpeed(): Function {
    var lastPos, newPos, timer, delta,
      delay = 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    // This inner function can access the properties above when called.
    return function amountScrolledSinceLastCall() {
      newPos = window.scrollY;
      if (lastPos != null) {
        delta = newPos - lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
  };
}

