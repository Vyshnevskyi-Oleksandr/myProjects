import { Component, OnInit } from '@angular/core';
import { ICurrencyState, loadCurrencies } from "./reducers/currency";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ICurrenciesList } from "./shared/models/currence.model";
import {CurrencyService} from "./shared/services/get-currency/get-currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CurrencyService]
})
export class AppComponent implements OnInit {
  public title = 'currencyConverter';
  public currencies$!: Observable<ICurrenciesList[] | null>;

  constructor(private store: Store<ICurrencyState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadCurrencies());
    this.currencies$ = this.store.select(
      (state:ICurrencyState) => state.currencies?.currencies ? state.currencies.currencies: null);
  }
}
