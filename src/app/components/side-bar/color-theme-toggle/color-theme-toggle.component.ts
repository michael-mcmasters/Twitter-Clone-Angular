import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from 'src/app/models/theme';
import { ColorThemeService } from 'src/app/services/color-theme.service';

@Component({
  selector: 'app-color-theme-toggle',
  templateUrl: './color-theme-toggle.component.html',
  styleUrls: ['./color-theme-toggle.component.css'],
})
export class ColorThemeToggleComponent implements OnInit {
  private theme: Theme;

  constructor(
    private colorThemeService: ColorThemeService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Toggle light-theme and dark-theme on the body element. Must be done this way because you can't use [ngClass] in index.html.
    this.colorThemeService.ColorTheme$.subscribe((newTheme) => {
      this.document.body.classList.replace(this.theme, newTheme);
      this.theme = newTheme;
    });
  }

  changeTheme() {
    this.colorThemeService.changeTheme();
  }
}
