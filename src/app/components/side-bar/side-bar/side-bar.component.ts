import { Component, OnInit } from '@angular/core';
import { SideBarItem } from 'src/app/models/sideBarItem';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ColorThemeService } from 'src/app/services/color-theme.service';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  colorTheme: Theme;

  faTwitter = faTwitter;

  // TODO: Icons are using their outline version. Make them use normal (bolder) version when active.
  // (See note in .html for how)
  sideBarItems: SideBarItem[] = [
    {
      name: 'Home',
      iconName: 'home',
      CSSClass: '',
    },
    {
      name: 'Explore',
      iconName: 'search',
      CSSClass: '',
    },
    {
      name: 'Notifications',
      iconName: 'notifications',
      CSSClass: '',
    },
    {
      name: 'Messages',
      iconName: 'mail',
      CSSClass: '',
    },
    {
      name: 'Bookmarks',
      iconName: 'note',
      CSSClass: 'bookmarks',
    },
    {
      name: 'Lists',
      iconName: 'subject',
      CSSClass: 'lists',
    },
    {
      name: 'Profile',
      iconName: 'perm_identity',
      CSSClass: '',
    },
    {
      name: 'More',
      iconName: 'more_horiz',
      CSSClass: '',
    },
  ];

  constructor(private colorThemeService: ColorThemeService) {
    this.colorThemeService.ColorTheme$.subscribe((newTheme) => {
      this.colorTheme = newTheme;
    });
  }

  ngOnInit(): void {}
}
