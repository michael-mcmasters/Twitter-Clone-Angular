import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning-angular-project';
  faStar = faStar;

  prevScrollBarPosition: number;

  constructor() {
  }

  ngOnInit(): void {
    const rightSideContainer = document.getElementById("right-side-container");
    const getAmountScrolled = this.getAmountScrolledClosure();

    window.addEventListener("scroll", () => {
      this.scrollSideBar(rightSideContainer, getAmountScrolled);
    })
  }

  // Function makes right sidebar scroll when mouse scrolls, even if it isn't hovering over it. (Only if overflowing.)
  // Scroll listener is called multiple times per scroll wheel "tick". And amountScrolled will give multiple different values per every "tick". Console.log it to debug.
  scrollSideBar(rightSideContainer: HTMLElement, getAmountScrolled: Function): void {
    const scrollBarPosition = window.scrollY;
    const amountScrolled = getAmountScrolled();

    // If scroll bar position is less than 0, Safari will pull the page back up. This check makes sure the element does not scroll when that happens.
    if (scrollBarPosition >= 0) {
      if (scrollBarPosition > this.prevScrollBarPosition) {
        rightSideContainer.scrollBy(0, amountScrolled); // user scrolled down
      }
      else if (scrollBarPosition < this.prevScrollBarPosition) {
        rightSideContainer.scrollBy(0, amountScrolled); // user scrolled up
      }
    }
    this.prevScrollBarPosition = scrollBarPosition;
  }

  // This is a closure (see notes). getAmountScrolledClosure() returns the function inside of it.
  // When the inner function is called, it can access the properties of its outer function.
  // (This function is based off of: https://stackoverflow.com/questions/22593286/detect-measure-scroll-speed).
  getAmountScrolledClosure(): Function {
    var lastPos, newPos, timer, delta,
      delay = 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    // Function returns the amount page has scrolled since the last time function was called.
    // This inner function can access the properties above when called.
    return function getAmountScrolled() {
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

