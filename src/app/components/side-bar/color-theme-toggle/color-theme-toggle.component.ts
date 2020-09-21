import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-color-theme-toggle',
  templateUrl: './color-theme-toggle.component.html',
  styleUrls: ['./color-theme-toggle.component.css']
})
// Code from here: https://www.youtube.com/watch?v=0lD5P_z7EiI&ab_channel=all.design
export class ColorThemeToggleComponent implements OnInit {

  theme: Theme = Theme.darkTheme;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.addThemeToElement();
  }

  // add CSS class (dark-theme) to <body> tag so all components can use its variables (--background-color) etc.
  addThemeToElement() {
    this.renderer.addClass(this.document.body, this.theme);
  }

  // re-name the class that is on <body> tag from dark-theme to light-theme and vice versa.
  changeTheme() {
    this.document.body.classList.replace(this.theme, this.theme === Theme.lightTheme ? this.theme = Theme.darkTheme : this.theme = Theme.lightTheme);
  }
}