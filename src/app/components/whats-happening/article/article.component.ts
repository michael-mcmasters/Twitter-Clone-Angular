import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  public image: string = './assets/images/dayman-avatar.jpg';
  @Input() article: any;

  constructor() {}

  ngOnInit(): void {}
}
