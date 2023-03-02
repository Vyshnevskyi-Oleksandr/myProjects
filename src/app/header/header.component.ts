import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICurrenciesList} from "../shared/models/currence.model";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public usd: ICurrenciesList | undefined;
  public eur: ICurrenciesList | undefined;

  @Input('currencies')
  set currencies(val: ICurrenciesList[] | null) {
  if (val?.length) {
  this.usd = val.find(v => v.cc === "USD")
  this.eur = val.find(v => v.cc === "EUR")
    }
  }
}
