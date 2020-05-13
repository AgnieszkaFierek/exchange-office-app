import {NgModule} from '@angular/core';
import {MaterialModule} from '../../shared/material.module';
import {ExchangeRatesRoutingModule} from './exchange-rates-routing.module';
import { ExchangeRatesDashboardComponent } from './components/exchange-rates-dashboard/exchange-rates-dashboard.component';
import {StoreModule} from '@ngrx/store';
import {exchangeRatesFeatureKey, reducer} from './store/reducers/exchange-rates.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ExchangeRatesEffects} from './store/effects/exchange-rates.effects';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [ExchangeRatesDashboardComponent],
  imports: [
    CommonModule,
    ExchangeRatesRoutingModule,
    MaterialModule,
    StoreModule.forFeature(exchangeRatesFeatureKey, reducer),
    EffectsModule.forFeature([ExchangeRatesEffects]),
  ]
})
export class ExchangeRatesModule {
}
