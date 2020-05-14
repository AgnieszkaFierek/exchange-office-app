import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from '../../../exchange-rates/services/exchange-rates.service';
import {DecimalPipe, formatNumber} from '@angular/common';

@Component({
  selector: 'app-exchange-charts',
  templateUrl: './exchange-charts.component.html',
  styleUrls: ['./exchange-charts.component.scss']
})
export class ExchangeChartsComponent implements OnInit {
  rateCurrency = 'USD';
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
  timeline = true;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private exchangeRatesService: ExchangeRatesService, private decimalPipe: DecimalPipe) { }

  ngOnInit(): void {
    this.getRatesHistory();
  }

  private getRatesHistory() {
    this.exchangeRatesService.getRatesHistory(this.rateCurrency, this.baseCurrency, this.startAt, this.endAt)
      .subscribe(ratesHistory => {
        const ratesHistoryGroup = [];
        for (let year = 2010; year <= 2020; year++) {
          const yearKeys = Object.keys(ratesHistory.rates).filter(key =>  key.substring(0, 4) === year.toString());

          let sum = 0;
          for (const yearKey of yearKeys) {
            sum += sum + ratesHistory.rates[yearKey][this.rateCurrency];
          }

          ratesHistoryGroup.push({name: year.toString(), value: sum ? (sum / yearKeys.length) : 0 });
        }
        this.exchangeChart.push({
          name: this.rateCurrency,
          series: ratesHistoryGroup
        });
      });
  }
}
