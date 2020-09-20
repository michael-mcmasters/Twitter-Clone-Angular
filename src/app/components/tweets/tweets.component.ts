import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[];

  constructor() {
    // This *could* be assigned when tweets is declared. But putting it here, because we would be using an API call in the constructor to get this information.
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
