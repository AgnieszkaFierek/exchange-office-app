import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RateDto} from '../models/rate.dto';
import {RateHistoryDto} from '../models/rate-history.dto';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  private readonly EXCHANGE_RATES_API_URL = 'https://api.exchangeratesapi.io';

  constructor(private httpClient: HttpClient) {
  }

  getRates(rateCurrency?: string, baseCurrency = 'EUR'): Observable<RateDto> {
    let url = `${this.EXCHANGE_RATES_API_URL}/latest?base=${baseCurrency}`;
    if (rateCurrency) {
      url += `&symbols=${rateCurrency}`;
    }
    return this.httpClient.get<RateDto>(url);
  }

  getRatesHistory(rateCurrency: string, baseCurrency: string, startAt: string, endAt: string): Observable<RateHistoryDto> {
    const url = `${this.EXCHANGE_RATES_API_URL}/history?start_at=${startAt}&end_at=${endAt}&symbols=${rateCurrency}&base=${baseCurrency}`;
    return this.httpClient.get<RateHistoryDto>(url);
  }
}
