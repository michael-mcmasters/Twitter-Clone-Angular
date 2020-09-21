import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-color-theme-toggle',
  templateUrl: './color-theme-toggle.component.html',
  styleUrls: ['./color-theme-toggle.component.css']
})
// Code from here: https://www.youtube.com/watch?v=0lD5P_z7EiI&ab_channel=all.design
export class ColorThemeToggleComponent implements OnInit {

  theme: string = "dark-theme";

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
