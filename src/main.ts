import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));

const addScript = link => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = link;
  document.head.append(script);
}

addScript("./node_modules/xlsx/dist/xlsx.extendscript.js");