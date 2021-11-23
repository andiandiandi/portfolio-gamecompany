import { Injectable } from '@angular/core';
import { ComponentImageMapping } from '../shared/component-image-mapping.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesCompanyService extends ComponentImageMapping {
  constructor() {
    super();
  }

  getImageMapping() {
    return {
      aboutUs:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fafectadospopular.eu%2Fwp-content%2Fuploads%2F2015%2F07%2Fbusiness-office-work.jpg&f=1&nofb=1',
      profilePlaceholder:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FWmvM0.png&f=1&nofb=1',
      profileLinkedinIcon:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fsicons%2Fbasic-round-social%2F512%2Flinkedin-icon.png&f=1&nofb=1',
    };
  }
}
