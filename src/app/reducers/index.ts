import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {currencyReducer, ICurrencyState} from "./currency";

export interface State {
  currency: ICurrencyState

}

export const reducers: ActionReducerMap<State> = {
  currency: currencyReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
