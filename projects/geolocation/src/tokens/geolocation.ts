import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

export const NAVIGATOR = new InjectionToken<Navigator>(
  'An abstraction over window.navigator object',
  {
    factory: () => {
      const { defaultView } = inject(DOCUMENT);

      if (!defaultView) {
        throw new Error('Window is not available');
      }

      return defaultView.navigator;
    },
  }
);

export const GEOLOCATION = new InjectionToken<Geolocation>(
  'An abstraction over window.navigator.geolocation object',
  {
    factory: () => inject(NAVIGATOR).geolocation,
  }
);
