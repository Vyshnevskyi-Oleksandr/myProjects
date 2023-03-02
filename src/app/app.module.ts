import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {CurrencyEffects} from "./shared/store/get-currency.effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {currencyReducer} from "./reducers/currency";
import {CurrencyModule} from "./currency-component/currency.module";
import {HeaderModule} from "./header/header.module";
import {CurrencyService} from "./shared/services/get-currency/get-currency.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    CurrencyModule,
    HttpClientModule,
    EffectsModule.forRoot([CurrencyEffects]),
    StoreModule.forRoot({currencies: currencyReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()})
  ],
  providers: [CurrencyService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
