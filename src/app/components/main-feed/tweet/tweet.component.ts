import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { faComment, faRetweet, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  faRetweet = faRetweet;
  faHeart = faHeart;
  faComment = faComment;
  faShare = faShare;

  constructor() {
  }

  ngOnInit(): void {
  }
}
