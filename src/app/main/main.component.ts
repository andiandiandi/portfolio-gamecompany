import { Component, OnInit } from '@angular/core';

interface Slide {
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
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-RldmHvd3W8E%2FWMGrZiaxYeI%2FAAAAAAAAAMI%2F1j5gVyimn-MDYxfLSGdcae04hH2x_dVgwCLcB%2Fs1600%2Fyvcctc0pomlrcmapqepo.png&f=1&nofb=1',
      title: 'Mansion´s Universe',
      description: 'A social fantasy town with endless possibilities.',
    },
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2F5eMeH.jpg&f=1&nofb=1',
      title: 'Forest-Olymp',
      description: 'Build your own terrarium and invite your friends over.',
    },
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-HbVq2yoXGxs%2FUFt12skZpNI%2FAAAAAAAAJxc%2FTCyS6OZmy8k%2Fs1600%2Fjourney-game-screenshot-12-b.jpg&f=1&nofb=1',
      title: 'Dunes MMORPG',
      description: 'Set in the fantasy world of Dunes and build your legacy.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
