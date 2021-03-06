import {NgModule} from '@angular/core';
import {MaterialModule} from '../../shared/material.module';
import {ExchangeRatesRoutingModule} from './exchange-rates-routing.module';
import { ExchangeRatesDashboardComponent } from './components/exchange-rates-dashboard/exchange-rates-dashboard.component';
import {StoreModule} from '@ngrx/store';
import {exchangeRatesFeatureKey, reducer} from './store/reducers/exchange-rates.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ExchangeRatesEffects} from './store/effects/exchange-rates.effects';
import {CommonModule} from '@angular/common';
import {RateBoxModule} from '../../shared/rate-box/rate-box.module';
import { ExchangeRatesCarouselComponent } from './components/exchange-rates-carousel/exchange-rates-carousel.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ExchangeRatesDashboardComponent, ExchangeRatesCarouselComponent],
  imports: [
    CommonModule,
    ExchangeRatesRoutingModule,
    MaterialModule,
    RateBoxModule,
    StoreModule.forFeature(exchangeRatesFeatureKey, reducer),
    EffectsModule.forFeature([ExchangeRatesEffects]),
    ReactiveFormsModule
  ]
})
export class ExchangeRatesModule {
}
