import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  constructor() { }
  local: string = 'en';
  getLocal() {
    return this.local;
  }
  setLocal(local) {
    this.local = local;
  }
}
