import {RateDto} from '../../models/rate.dto';
import {Action, createReducer, on} from '@ngrx/store';
import * as ExchangeRatesActions from '../actions/exchange-rates.actions';

export const exchangeRatesFeatureKey = 'rates';

export interface State {
  rates: RateDto;
}

export const initialState: State = {
  rates: null,
};

const exchangeRatesReducer = createReducer(
  initialState,
  on(ExchangeRatesActions.loadLatestRates),
  on(ExchangeRatesActions.loadLatestRatesSuccess, (stare, action) => ({
    ...stare,
    rates: action.rates
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return exchangeRatesReducer(state, action);
}
