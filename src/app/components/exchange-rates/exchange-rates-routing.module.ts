import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExchangeRatesDashboardComponent} from './components/exchange-rates-dashboard/exchange-rates-dashboard.component';


const routes: Routes = [
  {
    path: '', component: ExchangeRatesDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRatesRoutingModule {
}
