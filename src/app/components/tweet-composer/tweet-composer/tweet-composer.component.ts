import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-composer',
  templateUrl: './tweet-composer.component.html',
  styleUrls: ['./tweet-composer.component.css'],
})
export class TweetComposerComponent implements OnInit {
  avatarImage: string = './assets/images/jm-avatar.jpg';

  clickedOnInput: boolean = false;
  charactorCount: number = 0;
  charCount = document.getElementsByClassName('edit-box')[0];

  constructor() {}

  ngOnInit(): void {}

  do() {
    if (this.charCount) {
      this.charactorCount = this.charCount.innerText.length;
    }

    if (charactorCount > 0 && clickedOnInput) {
      document.getElementById('MyConteditableElement').classList.add('holder');
    }

    if (charactorCount == 0 && !clickedOnInput) {
      document
        .getElementById('MyConteditableElement')
        .classList.remove('holder');
    }
  }

  getContent(innerText) {
    this.clickedOnInput = false;
  }
}
