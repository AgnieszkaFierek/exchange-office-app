import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {RateDto} from '../../models/rate.dto';
import {ExchangeRatesService} from '../../services/exchange-rates.service';
import {trigger, transition} from '@angular/animations';
import {animationLeft, animationRight} from '../../models/animation';

@Component({
  selector: 'app-exchange-rates-carousel',
  templateUrl: './exchange-rates-carousel.component.html',
  styleUrls: ['./exchange-rates-carousel.component.scss'],
  animations: [
    trigger('animationSlider', [
      transition(':increment', animationRight),
      transition(':decrement', animationLeft),
    ]),
  ],
})
export class ExchangeRatesCarouselComponent implements OnInit {
  rates: { rateCurrency: string, baseCurrency: string }[] = [
    {
      rateCurrency: 'PLN',
      baseCurrency: 'EUR'
    },
    {
      rateCurrency: 'GBP',
      baseCurrency: 'USD'
    },
    {
      rateCurrency: 'CHF',
      baseCurrency: 'CAD'
    }
  ];
  intervalTime = 5000;
  index = 0;
  rate$: BehaviorSubject<RateDto> = new BehaviorSubject<RateDto>(null);

  constructor(private exchangeRatesService: ExchangeRatesService) {
  }

  ngOnInit(): void {
    this.getRates(0);

    setInterval(() => {
      this.onNext(this.index);
    }, this.intervalTime);
  }

  public onNext(index: number) {
    const newIndex = index < this.rates.length - 1 ? ++index : 0;
    this.getRates(newIndex, true);

  }

  public onPreview(index: number) {
    const newIndex = index === 0 ? this.rates.length - 1 : --index;
    this.getRates(newIndex, true);

  }

  private getRates(index: number, changeIndex?: boolean) {
    this.exchangeRatesService.getRates(this.rates[index].rateCurrency, this.rates[index].baseCurrency).subscribe(rate => {
      this.rate$.next(rate);
      if (changeIndex) {
        this.index = index;
      }
    });
  }

}
