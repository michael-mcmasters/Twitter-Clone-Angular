import { Component, Input, OnInit } from '@angular/core';
import { SideBarItem } from 'src/app/models/sideBarItem';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.css']
})
export class SideBarItemComponent implements OnInit {
  @Input() sideBarItem: SideBarItem;

  constructor() {
  }

  ngOnInit(): void {
  }
}
