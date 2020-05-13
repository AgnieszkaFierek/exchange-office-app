import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ExchangeRatesService} from '../../services/exchange-rates.service';
import * as ExchangeRatesActions from '../actions/exchange-rates.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ExchangeRatesEffects {
  constructor(private actions$: Actions, private service: ExchangeRatesService) {
  }

  loadLatestRates$ = createEffect(() => this.actions$.pipe(
    ofType(ExchangeRatesActions.loadLatestRates),
    switchMap(action => this.service.getRates(action.rateCurrency, action.baseCurrency).pipe(
      map(rates => ExchangeRatesActions.loadLatestRatesSuccess({rates})),
      catchError(error => of(ExchangeRatesActions.loadLatestRatesFailure({error})))
      )
    )
  ));
}
