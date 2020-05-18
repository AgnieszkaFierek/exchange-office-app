import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExchangeRatesCarouselComponent} from './exchange-rates-carousel.component';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as fromExchangeRates from '../../store/reducers/exchange-rates.reducer';
import {ExchangeRatesService} from '../../services/exchange-rates.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ExchangeRatesCarouselComponent', () => {
  let component: ExchangeRatesCarouselComponent;
  let fixture: ComponentFixture<ExchangeRatesCarouselComponent>;
  // let store: MockStore<fromExchangeRates.State>;
  let service: ExchangeRatesService;
  const ratesMock = {
    base: 'EUR',
    date: '2020-05-17',
    rates: null
  };
  const initialState = {rates: ratesMock};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeRatesCarouselComponent],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [provideMockStore({initialState}), ExchangeRatesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesCarouselComponent);
    service = TestBed.get(ExchangeRatesService);
    component = fixture.componentInstance;
    component.ratesGroup = service.exchangeRateGroups;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rates', () => {
    component.rate$.subscribe(rate => {
      expect(rate.base).toEqual(ratesMock.base);
    });
  });

  it('should rates groups', () => {
    expect(component.ratesGroup[0].rateCurrency).toEqual('PLN');
  });

  it('rate next index carousel', () => {
    const basicIndex = 0;
    component.onNext(basicIndex);
    expect(component.rateIndex).toEqual(1);
  });

  it('rate prev index carousel', () => {
    const basicIndex = 0;
    component.onPreview(basicIndex);
    expect(component.rateIndex).not.toEqual(0);
  });
});
