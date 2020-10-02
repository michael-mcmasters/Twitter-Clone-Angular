import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning-angular-project';
  prevScrollPosition: number;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
    window.addEventListener("scroll", () => {
      console.log("heyoo");
      const scrollPosition = window.scrollY;
      const amountScrolledSinceLastCall = getScrollSpeed();
      const element = document.getElementById("right-side-container");
      if (scrollPosition > this.prevScrollPosition) {
        // Scrolled down
        element.scrollBy(0, amountScrolledSinceLastCall);
      } else if (scrollPosition < this.prevScrollPosition) {
        // Scrolled up
        element.scrollBy(0, amountScrolledSinceLastCall);
      }
      this.prevScrollPosition = scrollPosition;
    });

    // Function from: https://stackoverflow.com/questions/22593286/detect-measure-scroll-speed.
    // Think of this function object as a class. It runs once on start-up and initiates its variables and functions.
    // When you call it with getScrollSpeed(), it jumps to the function at its return.
    var getScrollSpeed = (function (settings) {
      settings = settings || {};

      var lastPos, newPos, timer, delta,
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

      console.log("hey");
      function clear() {
        lastPos = null;
        delta = 0;
      }

      clear();

      // When you call getScrollSpeed(), it goes to this function and returns it. All of the code above only runs when program initiates.
      return function () {
        newPos = window.scrollY;
        if (lastPos != null) { // && newPos < maxScroll 
          delta = newPos - lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };
    })();
    // this () at the end tells the compiler to run getScrollSpeed() on initiation. Notice the entire function is wrapped in parenthesis.
    // This is called an "Immediately Invoked Function Expressions" or "Self Executing Function." It's used like classes to keep variables localized so they don't conflict with other libraries.
  }
}
