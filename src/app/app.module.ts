import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { ColorThemeToggleComponent } from './components/color-theme-toggle/color-theme-toggle.component';

@NgModule({
  declarations: [AppComponent, TweetsComponent, TweetComponent, ColorThemeToggleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
