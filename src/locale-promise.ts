import { LocaleService } from './app/locale.service';

export class LocaleServicePromise {

    // constructor(private localService: LocaleService) {
    //     console.log('cnt');
    //     this.locale = localService.getLocal();
    // }
    // locale: string = 'en';
    getLocale() {
        return new Promise((resolve, reject) => {
            if (localStorage.getItem('locale') === null) {
                localStorage.setItem('locale', 'fr');
              }
            resolve(localStorage.getItem('locale'));
        });
    }
}