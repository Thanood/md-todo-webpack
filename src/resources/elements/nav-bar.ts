import { autoinject, bindable } from 'aurelia-framework';
import { I18N } from "aurelia-i18n";

@autoinject()
export class NavBar {
  languages = [
    { title: 'Deutsch', code: 'de' },
    { title: 'English', code: 'en' }
  ];
  language;
  @bindable() title;

  constructor(private i18n: I18N) {
    this.language = this.languages[0];
  }

  switchLanguage(languageCode) {
    this.language = this.languages.find(l => l.code === languageCode) || this.language;
    this.i18n.setLocale(languageCode);
  }
}

