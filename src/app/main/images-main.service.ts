import { Injectable } from '@angular/core';
import { ComponentImageMapping } from '../shared/component-image-mapping.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesMainService extends ComponentImageMapping {
  constructor() {
    super();
  }

  getImageMapping() {
    return {
      merlinsArenaRoyale:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig08.deviantart.net%2F6ff8%2Ff%2F2015%2F346%2Ff%2Fd%2Fhypergod_asriel__wallpaper__by_lapinbeau-d9jxiq7.png&f=1&nofb=1',
      forestOlymp:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2F5eMeH.jpg&f=1&nofb=1',
      dunesLegacyMmorpg:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-HbVq2yoXGxs%2FUFt12skZpNI%2FAAAAAAAAJxc%2FTCyS6OZmy8k%2Fs1600%2Fjourney-game-screenshot-12-b.jpg&f=1&nofb=1',
      lookingAtPhone:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff2%2FMan_Looking_at_Phone_Cartoon_Vector.svg%2F512px-Man_Looking_at_Phone_Cartoon_Vector.svg.png&f=1&nofb=1',
      solitaire:
        'https://cdn.pixabay.com/photo/2013/04/01/08/26/cards-98382__340.png',
      mahjong: 'https://openclipart.org/download/269496/mahjongtiles.svg',
      cookieland:
        'https://cdn.pixabay.com/photo/2012/04/05/00/44/cookie-25400__340.png',
    };
  }
}
