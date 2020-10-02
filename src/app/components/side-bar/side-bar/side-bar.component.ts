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

  constructor() {
    console.log("SIDEBAR RUNNING");

    this.sideBarItems = [
      {
        name: "Home",
        iconName: "home_outline",
      },
      {
        name: "Explore",
        iconName: "search_outline",
      },
      {
        name: "Notifications",
        iconName: "notifications_outline",
      },
      {
        name: "Messages",
        iconName: "mail_outline",
      },
      {
        name: "Bookmarks",
        iconName: "note_outline",
      },
      {
        name: "Lists",
        iconName: "subject_outline",
      },
      {
        name: "Profile",
        iconName: "perm_identity_outline",
      },
      {
        name: "More",
        iconName: "more_horiz_outline",
      }
    ];
  }

  ngOnInit(): void {
  }

}
