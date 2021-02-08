import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent implements OnInit {
  @Input() promotion: any;

  constructor() {}

  ngOnInit(): void {}
}
