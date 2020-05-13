import {createAction, props} from '@ngrx/store';
import {RateDto} from '../../models/rate.dto';

export const loadLatestRates = createAction(
  '[Exchange Rates] Load Rates',
  props<{rateCurrency?: string, baseCurrency?: string}>()
);

export const loadLatestRatesSuccess = createAction(
  '[Exchange Rates] Load Rates Success',
  props<{rates: RateDto}>()
);

export const loadLatestRatesFailure = createAction(
  '[Exchange Rates] Load Rates Failure',
  props<{error: any}>()
);
