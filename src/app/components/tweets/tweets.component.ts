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
        message: 'Hello Everyone! I need a longer message so this is my longer message right here in this place here',
      },
      {
        name: 'Nathan Cleminson',
        message: "Seminole Heights has a new colorful crosswalk outside Broward Elementary as part of our Crosswalks to Classrooms initiative.Learn how this street mural is designed to inspire kids on their way to school while supporting"
      },
      {
        name: 'Stephy Cheeseman',
        message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quasi dolore incidunt! Laudantium ullam beatae, corporis enim praesentium sint nesciunt quisquam consequuntur porro expedita necessitatibus cupiditate, voluptatum est suscipit nemo."
      }
    ]
  }

  ngOnInit(): void { }
}
