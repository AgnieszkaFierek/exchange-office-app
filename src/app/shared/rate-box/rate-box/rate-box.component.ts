import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rate-box',
  templateUrl: './rate-box.component.html',
  styleUrls: ['./rate-box.component.scss']
})
export class RateBoxComponent implements OnChanges {
  @Input() rateCurrency: number;
  @Input() rateCurrencyBadge: string;
  @Input() baseCurrencyBadge: string;
  @Input() imageIndex?: number;

  photoUrl: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.imageIndex) {
      const height = `2${this.imageIndex}0`;
      this.photoUrl = `https://placekitten.com/300/${height}`;
    }
  }
}
