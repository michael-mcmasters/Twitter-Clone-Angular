import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsComponent } from './components/main-feed/tweets/tweets.component';
import { TweetComponent } from './components/main-feed/tweet/tweet.component';
import { ColorThemeToggleComponent } from './components/side-bar/color-theme-toggle/color-theme-toggle.component';

@NgModule({
  declarations: [AppComponent, TweetsComponent, TweetComponent, ColorThemeToggleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
