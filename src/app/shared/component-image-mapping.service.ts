import { Injectable } from '@angular/core';

@Injectable()
export abstract class ComponentImageMapping {
  constructor() {}

  abstract getImageMapping(): { [name: string]: string };

  getImageUrls(): string[] {
    return Object.entries(this.getImageMapping()).map((entry) => entry[1]);
  }
}
