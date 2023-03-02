import { Component, Input } from '@angular/core';

import { ICurrenciesList } from "../shared/models/currence.model";
@Component({
  selector: 'app-currency-component',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})

export class CurrencyComponent {
  @Input('currencies')
  set currencies(val: ICurrenciesList[] | null) {
    if (val?.length) {
      this.currency = val
    }
  }

  public currency!:  ICurrenciesList[] | null;

  public firstInputValue!: number;
  public secondInputValue!: number;

  public firstSelectorRate!: number;
  public secondSelectorRate!: number;

  public selectedFirstOption!: string;
  public selectedSecondOption!: string;

  public onFirstInputChange(value: number) {
    this.secondInputValue = Number(value * this.getConverterCurrency(true))
  }

  public onSecondInputChange(value: number) {
    this.firstInputValue = value * this.getConverterCurrency( false)
  }

  public onFirstSelectionChange(selectedOption: string): void {
    this.firstSelectorRate = this.getRate(selectedOption)
  }

  public onSecondSelectionChange(selectedOption: string): void {
    this.secondSelectorRate = this.getRate(selectedOption)
  }

  private getRate(selectedOption: string): number {
    if (this.currency?.length) {
      const currencyRate = this.currency.find(v => v.cc === selectedOption)
      return currencyRate ? currencyRate.rate : 0
    }
    return 0
  }

  private getConverterCurrency(source: boolean): number {
    let rate = 0
    if(source) {
       rate = this.firstSelectorRate / this.secondSelectorRate
    } else {
       rate =  this.secondSelectorRate / this.firstSelectorRate
    }
    return rate
  }
}
