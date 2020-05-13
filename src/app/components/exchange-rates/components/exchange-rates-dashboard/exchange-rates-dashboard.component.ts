import {Component, OnInit} from '@angular/core';
import {ExchangeRatesService} from '../../services/exchange-rates.service';
import {select, Store} from '@ngrx/store';
import {RateDto} from '../../models/rate.dto';
import {loadLatestRates} from '../../store/actions/exchange-rates.actions';
import {Observable} from 'rxjs';
import {selectRates} from '../../store/selectors/exchange-rates.selectors';

@Component({
  selector: 'app-exchange-rates-dashboard',
  templateUrl: './exchange-rates-dashboard.component.html',
  styleUrls: ['./exchange-rates-dashboard.component.scss']
})
export class ExchangeRatesDashboardComponent implements OnInit {
  rate$: Observable<RateDto>;
  public rateCurrencyBadge = 'PLN';

  constructor(private store: Store<{ rates: RateDto }>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadLatestRates({rateCurrency: this.rateCurrencyBadge}));
    this.rate$ = this.store.pipe(select(selectRates));
  }
}
