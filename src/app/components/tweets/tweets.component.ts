import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  //tweets: any[] = [1, 2, 3];
  tweets: Tweet[];

  constructor() {
    this.tweets = [
      {
        name: 'Dayman McMasters',
        message: 'Hello Everyone!',
      },
      {
        name: 'Nathan Cleminson',
        message: 'Hi people!'
      },
      {
        name: 'Stephy Cheeseman',
        message: 'Giggity Gooey!'
      }
    ]
  }

  ngOnInit(): void { }
}
