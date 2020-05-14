import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from '../../../exchange-rates/services/exchange-rates.service';

@Component({
  selector: 'app-exchange-charts',
  templateUrl: './exchange-charts.component.html',
  styleUrls: ['./exchange-charts.component.scss']
})
export class ExchangeChartsComponent implements OnInit {
  rateCurrencies = ['EUR', 'USD'];
  baseCurrency = 'PLN';
  startAt = '2010-01-01';
  endAt = '2020-05-01';
  exchangeChart: {
    name: string;
    series: {name: string, value: number}[];
  }[] = [];

  view: number[] = [700, 300];
  legend = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  yAxisLabel = 'Rates';

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit(): void {
    this.getRatesHistory();
  }

  private getRatesHistory() {
    this.exchangeRatesService.getRatesHistory(this.rateCurrencies.join(','), this.baseCurrency, this.startAt, this.endAt)
      .subscribe(ratesHistory => {
        this.rateCurrencies.forEach(rateCurrency => this.calculateRatesHistory(rateCurrency, ratesHistory));
      });
  }

  private calculateRatesHistory(rateCurrency, ratesHistory) {
    const ratesHistoryGroup = [];
    for (let year = 2010; year <= 2020; year++) {
      const yearKeys = Object.keys(ratesHistory.rates).filter(key =>  key.substring(0, 4) === year.toString());

      let sum = 0;
      for (const yearKey of yearKeys) {
        sum += sum + ratesHistory.rates[yearKey][rateCurrency];
      }

      const average = (sum / yearKeys.length - 1).toString().match(/\d+\.\d{4}/)[0];
      ratesHistoryGroup.push({name: year.toString(), value: sum ? average : 0 });
    }

    this.exchangeChart.push({
      name: rateCurrency,
      series: ratesHistoryGroup
    });
  }
}
