import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as CurrencyActions from "../../reducers/currency";
import {CurrencyService} from "../services/get-currency/get-currency.service";


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
