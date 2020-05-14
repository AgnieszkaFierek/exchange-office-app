import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RateDto} from '../../models/rate.dto';
import {ExchangeRatesService} from '../../services/exchange-rates.service';
import {trigger, transition} from '@angular/animations';
import {animationLeft, animationRight} from '../../models/animation';
import {select, Store} from '@ngrx/store';
import {loadLatestRates} from '../../store/actions/exchange-rates.actions';
import {selectRates} from '../../store/selectors/exchange-rates.selectors';

@Component({
  selector: 'app-exchange-rates-carousel',
  templateUrl: './exchange-rates-carousel.component.html',
  styleUrls: ['./exchange-rates-carousel.component.scss'],
  animations: [
    trigger('animationSlider', [
      transition(':increment', animationRight),
      transition(':decrement', animationLeft),
    ]),
  ],
})
export class ExchangeRatesCarouselComponent implements OnInit {
  ratesGroup: { rateCurrency: string, baseCurrency: string }[] = [
    {
      rateCurrency: 'PLN',
      baseCurrency: 'EUR'
    },
    {
      rateCurrency: 'GBP',
      baseCurrency: 'USD'
    },
    {
      rateCurrency: 'CHF',
      baseCurrency: 'CAD'
    }
  ];
  intervalTime = 6000;
  rateIndex = 0;
  animationIndex = 0;
  rate$: Observable<RateDto>;

  constructor(private exchangeRatesService: ExchangeRatesService, private store: Store<{ rates: RateDto }>) {
  }

  ngOnInit(): void {
    this.rate$ = this.store.pipe(select(selectRates));
    setInterval(() => {
      this.onNext(this.rateIndex);
    }, this.intervalTime);
  }

  public onNext(index: number) {
    if (index < this.ratesGroup.length - 1) {
      ++this.rateIndex;
      ++this.animationIndex;
    } else {
      this.rateIndex = this.ratesGroup.length - 1 - index;
      ++this.animationIndex;
    }
    this.getLatestRates(this.rateIndex);
  }

  public onPreview(index: number) {
    if (index !== 0) {
      --this.rateIndex;
      --this.animationIndex;
    } else {
      this.rateIndex = this.ratesGroup.length - 1 + index;
      --this.animationIndex;
    }
    this.getLatestRates(this.rateIndex);
  }

  private getLatestRates(index: number) {
    this.store.dispatch(
      loadLatestRates({rateCurrency: this.ratesGroup[index].rateCurrency, baseCurrency: this.ratesGroup[index].baseCurrency})
    );
  }
}
