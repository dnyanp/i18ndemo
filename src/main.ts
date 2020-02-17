import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LocaleServicePromise } from './locale-promise';

if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;

new LocaleServicePromise().getLocale().then((locale: string) => {
  //locale = localStorage.getItem('locale');

  // we use the webpack raw-loader to return the content as a string
  const translations = require(`raw-loader!./locale/messages-${locale}.xlf`).default;
console.log(locale);
console.log(translations);
setTimeout(some => { platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: TRANSLATIONS, useValue: translations },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]
})
  .catch(err => console.error(err));}, 10000);
 

});
