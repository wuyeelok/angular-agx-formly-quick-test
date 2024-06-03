import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MyCatFact } from '../my-cat-fact';

@Component({
  selector: 'app-try-try',
  templateUrl: './try-try.component.html',
  styleUrl: './try-try.component.scss',
})
export class TryTryComponent implements AfterViewInit {
  constructor(private http: HttpClient) {}
  ngAfterViewInit(): void {
    console.log('Try try');

    const url = 'https://catfact.ninja/fact';
    const catFact$: Observable<string> = this.http.get<MyCatFact>(url).pipe(
      map((obj: MyCatFact) => {
        console.log('show obj.fact');
        return obj.fact;
      })
    );

    const currentBitcoinPriceUSD$: Observable<number> = this.http
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .pipe(
        map(
          (data: { [index: string]: any }) => data['bpi']['USD']['rate_float']
        )
      );
    currentBitcoinPriceUSD$.subscribe((price) =>
      console.log('usd price of bitcoin is ' + price)
    );
  }
}
