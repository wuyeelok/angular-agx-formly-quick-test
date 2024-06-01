import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Subscription, fromEvent, take } from 'rxjs';

@Component({
  selector: 'app-i-don-know',
  templateUrl: './i-don-know.component.html',
  styleUrl: './i-don-know.component.scss',
})
export class IDonKnowComponent implements AfterViewInit, OnDestroy {
  @ViewChild('myButton', { read: ElementRef }) private button!: ElementRef;

  private btnSubscription!: Subscription;

  private _clickMeBtnChance: number = 3;

  get clickMeBtnChance(): number {
    return this._clickMeBtnChance;
  }

  ngAfterViewInit(): void {
    console.log('Called ngAfterViewInit');

    const btn$ = fromEvent(this.button.nativeElement, 'click').pipe(
      take(this._clickMeBtnChance)
    );

    this.btnSubscription = btn$.subscribe({
      next: (evt) => {
        console.log('Button clicked');
        this._clickMeBtnChance--;
      },
      complete: () => {
        console.log('No more click event!');
        this.button.nativeElement.innerText = 'FINSHED';
      },
    });
  }

  ngOnDestroy(): void {
    console.log('Callled ngOnDestroy');
    this.btnSubscription.unsubscribe();
  }
}
