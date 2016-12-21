
import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'ng2translate',
  templateUrl: './ng2translate.component.html',
  styleUrls: ['./ng2translate.component.css']
})
export class Ng2translateComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(["sl", "en", "mk"]);
    translate.setDefaultLang('sl');
  }

}
