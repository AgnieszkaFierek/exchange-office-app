import {NgModule} from '@angular/core';
import {CommonModule, DecimalPipe} from '@angular/common';
import { ExchangeChartsComponent } from './components/exchange-charts/exchange-charts.component';
import {ExchangeChartsRoutingModule} from './exchange-charts-routing.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MaterialModule} from '../../shared/material.module';


@NgModule({
  declarations: [ExchangeChartsComponent],
  imports: [
    CommonModule,
    ExchangeChartsRoutingModule,
    NgxChartsModule,
    MaterialModule
  ],
  providers: [DecimalPipe]
})
export class ExchangeChartsModule {
}
