import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ComponentImageMapping } from '../shared/component-image-mapping.service';
import { DataService, Slide } from '../shared/data.service';
import { LoadingStateService } from '../shared/loading-state.service';
import { ImagesCompanyService } from './images-company.service';

@Injectable({
  providedIn: 'root',
})
export class ImagePreloadResolver implements Resolve<any> {
  constructor(
    private router: Router,
    private dataService: DataService,
    private loadingStateService: LoadingStateService,
    private imagesCompanyService: ImagesCompanyService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const images = this.imagesCompanyService.getImageUrls();
    const updateStateFunc = () =>
      this.loadingStateService.LoadingStateCompany.next(false);

    this.loadingStateService.preloadImages(images, updateStateFunc);
  }
}
