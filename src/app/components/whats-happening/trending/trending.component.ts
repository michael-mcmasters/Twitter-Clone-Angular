import { Component, Input, OnInit } from '@angular/core';
import Trending from 'src/app/models/Trending';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  constructor() {}
  @Input() public trending: Trending;

  ngOnInit(): void {}
}
