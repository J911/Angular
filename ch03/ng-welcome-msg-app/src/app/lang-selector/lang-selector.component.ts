import { Component } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent {
  langCode: string;

  constructor() {
    this.langCode = 'ko';
  }

  setLangCode(lang: string) {
    this.langCode = lang;
  }
  
  
}
