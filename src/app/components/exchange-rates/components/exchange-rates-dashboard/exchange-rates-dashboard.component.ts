import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from '../../services/exchange-rates.service';

@Component({
  selector: 'app-exchange-rates-dashboard',
  templateUrl: './exchange-rates-dashboard.component.html',
  styleUrls: ['./exchange-rates-dashboard.component.scss']
})
export class ExchangeRatesDashboardComponent implements OnInit {

  constructor(private services: ExchangeRatesService) { }

  ngOnInit(): void {
    this.services.getRates('PLN').subscribe(data => {
      console.log(data);
    });
  }

}
