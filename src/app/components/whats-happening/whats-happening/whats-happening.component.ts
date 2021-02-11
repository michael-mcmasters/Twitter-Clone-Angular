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
  public articles: any[];
  public trending: any[];
  public promotions: any[];

  constructor(private colorThemeService: ColorThemeService) {}

  ngOnInit(): void {
    this.colorThemeService.ColorTheme$.subscribe((data) => {
      this.colorTheme = data;

      this.articles = [
        {
          category: 'Weather · LIVE',
          body:
            '‘I’m Not a Cat,’ Lawyer Tells Judge When He Can’t Change The Zoom Filter – Hilarious Video',
          img: './assets/images/dayman-avatar.jpg',
        },
        {
          category: 'Weather · News',
          body:
            'Quick-hitting snow to precede potential blockbuster storm across the mid-Atlantic, Northeast',
          img: './assets/images/im-not-a-cat.png',
        },
      ];

      this.trending = [
        {
          category: 'Trending in United States',
          content: '#11milliondreams',
          numOfTweets: '2,110',
        },
        {
          category: 'Trending in United States',
          content: '#11milliondreams',
          numOfTweets: '2,110',
        },
      ];

      this.promotions = [
        {
          mainContent: '#StarTrekDiscover 🙎‍♂️',
          secondaryContent: 'New Season Thursday',
          thirdContent: '↗ Promoted by Star Trek on CBS All Access',
        },
      ];
    });
  }
}
