import { Component } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent {
  userName = '';
  welcomeMsg = 'test';
  private vaild = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  constructor(public i18nSupportService: I18nSupportService) {}

  ngAfterViewInit() {
    const checkTouchedFn= () => {
      if(this.vaild) return;
      alert('이름을 입력해 주세요');
    };

    setTimeout(checkTouchedFn,  WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  // 양방향 데이터 바인딩을 사용하기 위해 app.module.ts 에 FormsModule를 인클루드함
  onChange() {
    this.vaild = this.userName.length > 0;
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupportService.getWelcomeMsgByCode(this.userName, 'ko');
  }
}

