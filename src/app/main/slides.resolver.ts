import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { DataService, Slide } from '../shared/data.service';
import { LoadingStateService } from '../shared/loading-state.service';

@Injectable({
  providedIn: 'root',
})
export class SlidesResolver implements Resolve<Slide[]> {
  constructor(
    private router: Router,
    private dataService: DataService,
    private loadingStateService: LoadingStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const slides = this.dataService.getSlides();
    const images = slides.map((slide) => slide.src);
    const updateStateFunc = () =>
      this.loadingStateService.loadingStateMain.next(false);

    this.loadingStateService.preloadImages(images, updateStateFunc);

    return slides;
  }
}
