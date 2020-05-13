import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromExchangeRates from '../reducers/exchange-rates.reducer';

export const selectExchangeRatesState = createFeatureSelector<fromExchangeRates.State> (
  fromExchangeRates.exchangeRatesFeatureKey
);

export const selectRates = createSelector(selectExchangeRatesState, (state: fromExchangeRates.State) => state.rates);
