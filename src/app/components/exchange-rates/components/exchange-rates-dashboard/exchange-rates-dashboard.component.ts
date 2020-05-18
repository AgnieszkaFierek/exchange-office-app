import {Component, OnDestroy, OnInit} from '@angular/core';
import {ExchangeRatesService} from '../../services/exchange-rates.service';
import {RateDto} from '../../models/rate.dto';
import {Observable, Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-exchange-rates-dashboard',
  templateUrl: './exchange-rates-dashboard.component.html',
  styleUrls: ['./exchange-rates-dashboard.component.scss']
})
export class ExchangeRatesDashboardComponent implements OnInit, OnDestroy {
  rate$: Observable<RateDto>;
  public rateCurrencyBadge = 'PLN';
  public form: FormGroup;
  public rates: string[] = ['EUR', 'PLN'];

  private subscriptions = new Subscription();

  constructor(private exchangeRatesService: ExchangeRatesService) {
  }

  ngOnInit(): void {
    this.form = this.exchangeRatesService.createFrom();
    this.rate$ = this.exchangeRatesService.getRates(this.rateCurrencyBadge);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onChange() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.value;

    this.rate$ = this.exchangeRatesService.getRates(value.rate, value.base);

    this.subscriptions.add(
      this.rate$.subscribe(_ => {
        this.rateCurrencyBadge = value.rate;
      })
    );
  }
}
