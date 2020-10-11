import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from 'src/app/models/theme';
import { ColorThemeService } from 'src/app/services/color-theme.service';
import { pipe } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'app-color-theme-toggle',
  templateUrl: './color-theme-toggle.component.html',
  styleUrls: ['./color-theme-toggle.component.css'],
})
export class ColorThemeToggleComponent implements OnInit {
  theme: Theme = Theme.darkTheme;

  constructor(
    private colorThemeService: ColorThemeService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, this.theme);

    // Callback Function in subscribe() runs every time value of observable changes.
    this.colorThemeService.ColorTheme$.subscribe((data) => {
      this.document.body.classList.replace(this.theme, data); // toggle 'light-theme' 'dark-theme' class on <body> tag. It has to be done this way because you can't use [ngClass] in index.html.
      this.theme = data;
    });
  }

  changeTheme() {
    this.colorThemeService.changeTheme();
  }
}
