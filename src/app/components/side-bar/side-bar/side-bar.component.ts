import { Component, OnInit } from '@angular/core';
import { SideBarItem } from 'src/app/models/sideBarItem';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  sideBarItems: SideBarItem[];

  constructor() {
    this.sideBarItems = [
      {
        name: "Home",
      },
      {
        name: "Explore",
      },
      {
        name: "Notifications",
      },
      {
        name: "Messages",
      },
      {
        name: "Bookmarks",
      },
      {
        name: "Lists",
      },
      {
        name: "Profile",
      },
      {
        name: "More",
      }
    ];
  }

  ngOnInit(): void {
  }

}
