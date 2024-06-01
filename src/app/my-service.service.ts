import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor() {}

  sayHello() {
    console.log('Hello');
  }
}
