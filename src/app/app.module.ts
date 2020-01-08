import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeNl from '@angular/common/locales/nl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeNl, 'nl');

//console.log(location);
const local = localStorage.getItem('locale')

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: local == 'nlvisi' ? 'nl' : local }],
  bootstrap: [AppComponent]
})
export class AppModule { }
