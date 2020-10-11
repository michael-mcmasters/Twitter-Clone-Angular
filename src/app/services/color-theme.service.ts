import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root',
})
export class ColorThemeService {
  // BehaviourService is a kind of Observable. This value defaults to dark theme.
  colorTheme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    Theme.darkTheme
  );

  // This is just a public getter property
  get ColorTheme$(): BehaviorSubject<Theme> {
    return this.colorTheme$;
  }

  // Use observable.next() to change the value to the new value.
  changeTheme(): BehaviorSubject<Theme> {
    if (this.colorTheme$.value === Theme.lightTheme) {
      this.colorTheme$.next(Theme.darkTheme);
    } else {
      this.colorTheme$.next(Theme.lightTheme);
    }
    return this.colorTheme$;
  }
}
