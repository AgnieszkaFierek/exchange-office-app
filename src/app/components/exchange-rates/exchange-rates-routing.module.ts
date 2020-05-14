import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExchangeRatesDashboardComponent} from './components/exchange-rates-dashboard/exchange-rates-dashboard.component';


const routes: Routes = [
  {
    path: '', component: ExchangeRatesDashboardComponent
  },
  {
    path: 'charts', loadChildren: () => import('../exchange-charts/exchange-charts.module').then(c => c.ExchangeChartsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRatesRoutingModule {
}
