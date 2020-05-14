import {createFeatureSelector, createSelector, select} from '@ngrx/store';
import {State, exchangeRatesFeatureKey} from '../reducers/exchange-rates.reducer';
import {pipe} from 'rxjs';
import {filter} from 'rxjs/operators';

export const selectExchangeRatesState = createFeatureSelector<State> (
  exchangeRatesFeatureKey
);

export const selectRates = createSelector(selectExchangeRatesState, (state: State) => state.rates);

export const selectExchangeRates = pipe(
  select(selectRates),
  filter(rates => rates !== null),
);
