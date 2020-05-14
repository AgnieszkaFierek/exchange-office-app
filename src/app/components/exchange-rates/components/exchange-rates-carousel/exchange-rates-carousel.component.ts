import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RateDto} from '../../models/rate.dto';
import {ExchangeRatesService} from '../../services/exchange-rates.service';
import {trigger, transition} from '@angular/animations';
import {animationLeft, animationRight} from '../../models/animation';
import {Store} from '@ngrx/store';
import {loadLatestRates} from '../../store/actions/exchange-rates.actions';
import {selectExchangeRates} from '../../store/selectors/exchange-rates.selectors';
import {IExchangeRateGroup} from '../../../../shared/models/exchange-rate-group.interfaces';

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
  intervalTime = 6000;
  rateIndex = 0;
  animationIndex = 0;
  ratesGroup: IExchangeRateGroup[];
  rate$: Observable<RateDto>;

  constructor(private exchangeRatesService: ExchangeRatesService, private store: Store<{ rates: RateDto }>) {
  }

  ngOnInit(): void {
    this.ratesGroup = this.exchangeRatesService.exchangeRateGroups;

    this.store.dispatch(loadLatestRates(this.ratesGroup[0]));
    this.rate$ = this.store.pipe(selectExchangeRates);

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
