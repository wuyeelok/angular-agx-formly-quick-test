import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-try-try',
  templateUrl: './try-try.component.html',
  styleUrl: './try-try.component.scss',
})
export class TryTryComponent {
  constructor(private http: HttpClient) {}
}
