import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root',
})
export class ColorThemeService {
  
  // Value defaults to darkTheme
  private observable: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    Theme.darkTheme
  );

  getTheme(): Observable<Theme> {
    return this.observable;
  }

  // Use observable.next() to change the value to the new value.
  changeTheme(): Observable<Theme> {
    if (this.observable.value === Theme.lightTheme) {
      this.observable.next(Theme.darkTheme);
    } else {
      this.observable.next(Theme.lightTheme);
    }
    return this.observable;
  }
}
