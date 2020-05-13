import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RateDto} from '../models/rate.dto';

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
}
