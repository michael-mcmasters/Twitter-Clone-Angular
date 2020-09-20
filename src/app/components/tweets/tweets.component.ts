import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  //tweets: any[] = [1, 2, 3];
  tweets: any[];

  constructor() {
    this.tweets = [
      {
        name: 'Dayman McMasters',
        message: 'Hello Everyone!'
      },
      {
        name: 'Nathan Cleminson',
        message: 'Hello Everyone!'
      },
      {
        name: 'Stephy Cheeseman',
        message: 'Hello Everyone!'
      }
    ]
  }

  ngOnInit(): void { }
}
