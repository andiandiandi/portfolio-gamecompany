import { Component, OnInit } from '@angular/core';

export interface Slide {
  src: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  slides: Slide[] = [
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig08.deviantart.net%2F6ff8%2Ff%2F2015%2F346%2Ff%2Fd%2Fhypergod_asriel__wallpaper__by_lapinbeau-d9jxiq7.png&f=1&nofb=1',
      title: 'Merlin\'s Arena Royale',
      description: 'Collect ressources. Conquer areas. Meet friends.',
    },
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2F5eMeH.jpg&f=1&nofb=1',
      title: 'Forest Olymp',
      description: 'Build your own terrarium - Grow your land - Compete with the community',
    },
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-HbVq2yoXGxs%2FUFt12skZpNI%2FAAAAAAAAJxc%2FTCyS6OZmy8k%2Fs1600%2Fjourney-game-screenshot-12-b.jpg&f=1&nofb=1',
      title: 'Dunes Legacy MMORPG',
      description: 'Set in a fantasy world of Dunes and build your own legacy.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
