import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import {ICurrencies} from "../shared/models/currence.model";

export interface ICurrencyState {
  currencies: ICurrencies | null;
  loading: boolean;
  error: boolean;
}

export const initialCurrencyState: ICurrencyState = {
  currencies: null,
  loading: false,
  error: false
};

export const loadCurrencies = createAction(
  '[Currency] Load Currencies'
);

export const loadCurrenciesSuccess = createAction(
  '[Currency] Load Currencies Success',
  props<{ currencies: ICurrencies }>()
);

export const loadCurrenciesFailure = createAction(
  '[Currency] Load Currencies Failure',
  props<{ error: any }>()
);

export const currencyReducer = createReducer(
  initialCurrencyState,
  on(loadCurrencies, (state) => ({
    ...state,
    loading: true,
    error: false
  })),
  on(loadCurrenciesSuccess, (state,  currencies) => ({
    ...state,
    currencies: currencies.currencies,
    loading: false,
    error: false
  })),
  on(loadCurrenciesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),


);
