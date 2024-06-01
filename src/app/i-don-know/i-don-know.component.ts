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
  @ViewChild('resetButton', { read: ElementRef })
  private resetButton!: ElementRef;

  private btnSubscription!: Subscription;
  private resetBtnSubsc!: Subscription;

  private _clickMeBtnChance: number = 3;

  get clickMeBtnChance(): number {
    return this._clickMeBtnChance;
  }

  ngAfterViewInit(): void {
    console.log('Called ngAfterViewInit');

    const btn$ = fromEvent(this.button.nativeElement, 'click').pipe(
      take(this._clickMeBtnChance)
    );

    const clickedMeBtnObserver = {
      next: () => {
        console.log('Button clicked');
        this._clickMeBtnChance--;
      },
      complete: () => {
        console.log('No more click event!');
        this.button.nativeElement.innerText = 'FINSHED';
      },
    };

    this.btnSubscription = btn$.subscribe(clickedMeBtnObserver);

    const resetBtn$ = fromEvent(this.resetButton.nativeElement, 'click');
    this.resetBtnSubsc = resetBtn$.subscribe(() => {
      this.btnSubscription.unsubscribe();
      this._clickMeBtnChance = 3;
      this.button.nativeElement.innerText = 'Click ME';
      this.btnSubscription = btn$.subscribe(clickedMeBtnObserver);
    });
  }

  ngOnDestroy(): void {
    console.log('Callled ngOnDestroy');
    this.btnSubscription.unsubscribe();
    this.resetBtnSubsc.unsubscribe();
  }
}
