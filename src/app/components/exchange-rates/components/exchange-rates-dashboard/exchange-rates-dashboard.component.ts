import {Component, OnInit} from '@angular/core';
import {ExchangeRatesService} from '../../services/exchange-rates.service';
import {RateDto} from '../../models/rate.dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-exchange-rates-dashboard',
  templateUrl: './exchange-rates-dashboard.component.html',
  styleUrls: ['./exchange-rates-dashboard.component.scss']
})
export class ExchangeRatesDashboardComponent implements OnInit {
  rate$: Observable<RateDto>;
  public rateCurrencyBadge = 'PLN';

  constructor(private exchangeRatesService: ExchangeRatesService) {
  }

  ngOnInit(): void {
    this.rate$ = this.exchangeRatesService.getRates(this.rateCurrencyBadge);
  }
}
