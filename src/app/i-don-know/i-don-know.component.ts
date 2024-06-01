import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-i-don-know',
  templateUrl: './i-don-know.component.html',
  styleUrl: './i-don-know.component.scss',
})
export class IDonKnowComponent implements AfterViewInit, OnDestroy {
  @ViewChild('myButton', { read: ElementRef }) private button!: ElementRef;

  private btnSubscription!: Subscription;

  private _clickMeBtnCounter: number = 0;

  get clickMeBtnCounter(): number {
    return this._clickMeBtnCounter;
  }

  ngAfterViewInit(): void {
    console.log('Called ngAfterViewInit');
    const btn$ = fromEvent(this.button.nativeElement, 'click');
    this.btnSubscription = btn$.subscribe((evt) => {
      console.log('Button Clicked');
      this._clickMeBtnCounter++;
    });
  }

  ngOnDestroy(): void {
    console.log('Callled ngOnDestroy');
    this.btnSubscription.unsubscribe();
  }
}
