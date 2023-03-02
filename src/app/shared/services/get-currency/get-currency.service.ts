import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrencies } from "../../models/currence.model";

@Injectable()
export class CurrencyService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?jsonads';

  constructor(private http: HttpClient) {}


  getCurrency(): Observable<ICurrencies> {
    return this.http.get<ICurrencies>(this.apiUrl);
  }
}
