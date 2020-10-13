import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { ColorThemeService } from 'src/app/services/color-theme.service';

@Component({
  selector: 'app-whats-happening',
  templateUrl: './whats-happening.component.html',
  styleUrls: ['./whats-happening.component.css'],
})
export class WhatsHappeningComponent implements OnInit {
  public colorTheme: Theme;

  private category: string;
  private articleTitle: string;
  public image: string = './assets/images/dayman-avatar.jpg';

  // "private colorThemeService: ColorThemeService" is shorthand for dependency injection. See this video @6.32: https://www.youtube.com/watch?v=xaYuxILKBlo&t=41s&ab_channel=AndreMadarang
  constructor(private colorThemeService: ColorThemeService) {}

  ngOnInit(): void {
    this.colorThemeService.ColorTheme$.subscribe((data) => {
      this.colorTheme = data;
    });
  }
}
