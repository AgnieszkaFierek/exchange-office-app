import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/exchange-rates',
    pathMatch: 'full'
  },

  {
    path: 'exchange-rates', loadChildren: () => import('./components/exchange-rates/exchange-rates.module').then(e => e.ExchangeRatesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
