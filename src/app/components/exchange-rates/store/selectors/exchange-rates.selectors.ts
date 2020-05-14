import {createFeatureSelector, createSelector, select} from '@ngrx/store';
import * as fromExchangeRates from '../reducers/exchange-rates.reducer';
import {pipe} from 'rxjs';
import {filter, first} from 'rxjs/operators';

export const selectExchangeRatesState = createFeatureSelector<fromExchangeRates.State> (
  fromExchangeRates.exchangeRatesFeatureKey
);

export const selectRates = createSelector(selectExchangeRatesState, (state: fromExchangeRates.State) => state.rates);

export const selectFirstRate = pipe(
  select(selectRates),
  filter(rate => rate !== null),
  first()
);
