import { Component, OnInit } from '@angular/core';
import { SideBarItem } from 'src/app/models/sideBarItem';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  sideBarItems: SideBarItem[];
  faTwitter = faTwitter;

  // TODO: Icons are using their outline version. Make them use normal (bolder) version when active.
  // (See note in .html for how)
  constructor() {
    this.sideBarItems = [
      {
        name: "Home",
        iconName: "home",
      },
      {
        name: "Explore",
        iconName: "search",
      },
      {
        name: "Notifications",
        iconName: "notifications",
      },
      {
        name: "Messages",
        iconName: "mail",
      },
      {
        name: "Bookmarks",
        iconName: "note",
      },
      {
        name: "Lists",
        iconName: "subject",
      },
      {
        name: "Profile",
        iconName: "perm_identity",
      },
      {
        name: "More",
        iconName: "more_horiz",
      }
    ];
  }

  ngOnInit(): void {
  }

}
