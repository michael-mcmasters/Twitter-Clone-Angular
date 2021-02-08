import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { ColorThemeService } from 'src/app/services/color-theme.service';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-whats-happening',
  templateUrl: './whats-happening.component.html',
  styleUrls: ['./whats-happening.component.css'],
})
export class WhatsHappeningComponent implements OnInit {
  public colorTheme: Theme;
  private articles: any[];

  constructor(private colorThemeService: ColorThemeService) {}

  ngOnInit(): void {
    this.colorThemeService.ColorTheme$.subscribe((data) => {
      this.colorTheme = data;

      this.articles = [
        {
          category: 'Category · LIVE',
          body:
            "This is an article: Wow an article. I'm writing more to see what happens when it gets too long. And just one more.",
          img: '',
        },
        {
          category: 'Cat2 * AlsoLIVE',
          body: 'This is another article wow!',
          img: '',
        },
      ];
    });
  }
}
