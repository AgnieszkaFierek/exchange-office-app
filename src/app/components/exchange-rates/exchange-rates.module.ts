import {NgModule} from '@angular/core';
import {MaterialModule} from '../../shared/material.module';
import {ExchangeRatesRoutingModule} from './exchange-rates-routing.module';
import { ExchangeRatesDashboardComponent } from './components/exchange-rates-dashboard/exchange-rates-dashboard.component';


@NgModule({
  declarations: [ExchangeRatesDashboardComponent],
  imports: [
    ExchangeRatesRoutingModule,
    MaterialModule
  ]
})
export class ExchangeRatesModule {
}
