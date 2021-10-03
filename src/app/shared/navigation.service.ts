import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public stack: string[];

  constructor() {
    this.stack = ['Home', 'Company'];
  }

  push(item: string) {
    this.stack.push(item);
  }

  pop(item: string) {
    this.stack.push(item);
  }

  getStack(): string[] {
    return this.stack;
  }
}
