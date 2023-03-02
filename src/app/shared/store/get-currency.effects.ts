// import {Injectable} from "@angular/core";
// import {catchError, EMPTY, map, mergeMap, Observable, of, switchMap, tap} from "rxjs";
// import {Actions, createEffect, ofType} from "@ngrx/effects";
// import {GetCurrencyService} from "../services/get-currency/get-currency.service";
// import {ICurrency, IDefaultCurrency} from "../models/currence.model";
// import {getCurrency, loadCurrencies, loadCurrencyError, loadCurrencySuccess} from "../../reducers/currency";
// import {Store} from "@ngrx/store";

// @Injectable()
// export class CurrencyEffects {
  //
  // login$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(getCurrency),
  //     switchMap(() => {
  //       return this.getCurrencyService.getCurrency().pipe(
  //         map((response: any) => {
  //           this.store.dispatch(loadCurrencySuccess({action: response}))
  //           return loadCurrencySuccess({action: response})
  //         }),
  //         catchError((error: any) => {
  //           return of(loadCurrencyError({action: error}));
  //         })
  //       )
  //     })
  //   );
  // })
  //
  // constructor(
  //   private actions$: Actions,
  //   private getCurrencyService: GetCurrencyService,
  //   private store:Store
  // ) {}

  import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as CurrencyActions from "../../reducers/currency";
import {CurrencyService} from "../services/get-currency/get-currency.service";
import {ICurrencies, ICurrenciesList} from "../models/currence.model";


@Injectable()
export class CurrencyEffects {
  loadCurrencies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrencyActions.loadCurrencies),
      switchMap(() =>
        this.currencyService.getCurrency().pipe(
          map((currencies) =>
            CurrencyActions.loadCurrenciesSuccess({currencies})
          ),
          catchError((error) =>
            of(CurrencyActions.loadCurrenciesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}
}
