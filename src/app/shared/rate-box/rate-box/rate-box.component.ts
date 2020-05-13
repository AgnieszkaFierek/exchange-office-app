import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rate-box',
  templateUrl: './rate-box.component.html',
  styleUrls: ['./rate-box.component.scss']
})
export class RateBoxComponent {
  @Input() rateCurrency: number;
  @Input() rateCurrencyBadge: string;
  @Input() baseCurrencyBadge: string;

  constructor() {
  }
}
