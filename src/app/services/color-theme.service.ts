import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root',
})

// Color values can be found in styles.css as CSS variables.
// This service provides the class name needed to activate the variables.
// The consuming components are responsible for adding the class to their individual HTML elements.
export class ColorThemeService {
  private colorTheme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    Theme.darkTheme
  );

  get ColorTheme$(): BehaviorSubject<Theme> {
    return this.colorTheme$;
  }

  // Toggles between light theme / dark theme.
  changeTheme(): BehaviorSubject<Theme> {
    if (this.colorTheme$.value === Theme.lightTheme) {
      this.colorTheme$.next(Theme.darkTheme);
    } else {
      this.colorTheme$.next(Theme.lightTheme);
    }
    return this.colorTheme$;
  }
}
