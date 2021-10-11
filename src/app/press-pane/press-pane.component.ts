import { Component, Input, OnInit } from '@angular/core';

interface Blog {
  imgUrl: string;
}

@Component({
  selector: 'app-press-pane',
  templateUrl: './press-pane.component.html',
  styleUrls: ['./press-pane.component.scss'],
})
export class PressPaneComponent implements OnInit {
  @Input()
  numberOfBlogs: number = 5;

  @Input()
  showPress: boolean = true;

  @Input()
  backgroundImage: boolean = false;
  
  @Input()
  header: boolean = false;

  blogs: Blog[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.numberOfBlogs; i++) {
      this.blogs.push({ imgUrl: this.getRandomPressImage() });
    }
  }

  getRandomPressImage() {
    let url = '';
    while (true) {
      const items = [300, 350, 400, 450, 500];
      const width = items[Math.floor(Math.random() * items.length)];
      const height = items[Math.floor(Math.random() * items.length)];
      const url = 'https://unsplash.it/' + width + '/' + height;
      if (width >= 350 || height >= 350) return url;
    }
  }
}
