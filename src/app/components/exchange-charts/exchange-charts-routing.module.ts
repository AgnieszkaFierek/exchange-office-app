import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExchangeChartsComponent} from './components/exchange-charts/exchange-charts.component';


const routes: Routes = [
  {
    path: '', component: ExchangeChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeChartsRoutingModule {
}
