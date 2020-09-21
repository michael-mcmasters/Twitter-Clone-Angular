import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;
  imageURL: string = "https://cdn-media-1.freecodecamp.org/images/1*dxawCwfllIh8ljUcRtwnXg.png"
  theme: string = "light-theme";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(this.theme, this.theme === "light-theme" ? this.theme = "dark-theme" : this.theme = "light-theme");
  }

  // add color theme CSS class to <body> tag so all components can use its variables (--background-color) etc.
  initializeTheme() {
    this.renderer.addClass(this.document.body, this.theme);
  }

}
