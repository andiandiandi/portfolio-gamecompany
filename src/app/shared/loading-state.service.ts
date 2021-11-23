import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Slide {
  src: string;
  title: string;
  description: string;
}

export interface Job {
  location: string;
  title: string;
  locationType: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoadingStateService {
  public loadingStateMain = new BehaviorSubject<boolean>(true);
  public LoadingStateCompany = new BehaviorSubject<boolean>(true);

  constructor() {}

  preloadImages(urls: string[], doneCallback: () => void) {
    Promise.all(
      Array.from(
        urls.map((url) => {
          const image = new Image();
          image.src = url;
          return image;
        })
      )
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
        )
    ).then(() => {
      doneCallback();
    });
  }
}
