import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18nWithJIT';
  minutes = 0;
  num = 1000000000.123;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() { this.gender = 'male'; }
  female() { this.gender = 'female'; }
  other() { this.gender = 'other'; }

  changeLocal(local: string) {
    console.log(local);
    if (local === null) {
      localStorage.setItem('locale', 'en');
    } else {
      localStorage.setItem('locale', local);
    }
    location.reload();
  }
}
