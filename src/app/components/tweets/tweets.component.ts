import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  constructor() { }

  name: string = 'Jimitron';

  ngOnInit(): void { }
}
