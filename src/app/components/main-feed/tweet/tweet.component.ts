import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import {
  faRetweet,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { ColorThemeService } from 'src/app/services/color-theme.service';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent implements OnInit {
  colorTheme: Theme;

  @Input() tweet: Tweet;
  faRetweet = faRetweet;
  faHeart = faHeart;
  faComment = faComment;
  faExternalLinkAlt = faExternalLinkAlt;

  constructor(private colorThemeService: ColorThemeService) {}

  ngOnInit(): void {
    this.colorThemeService.ColorTheme$.subscribe((data) => {
      this.colorTheme = data;
    });
  }
}
