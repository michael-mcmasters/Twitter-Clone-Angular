import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-composer',
  templateUrl: './tweet-composer.component.html',
  styleUrls: ['./tweet-composer.component.css'],
})
export class TweetComposerComponent implements OnInit {
  avatarImage: string = './assets/images/jm-avatar.jpg';

  constructor() {}

  ngOnInit(): void {}
}
