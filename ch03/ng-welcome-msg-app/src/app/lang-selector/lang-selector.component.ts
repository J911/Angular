import { Component } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent {
  langCode: string;

  constructor(public i18nSupport: I18nSupportService) {
    this.langCode = i18nSupport.langCode;
  }

  setLangCode(code: string) {
    this.langCode = code;
    this.i18nSupport.langCode = code;

  }
  
  
}
