import { Component, Input, OnDestroy, OnInit } from '@angular/core';

export interface Slide {
  src: string;
  title: string;
  description: string;
}

enum MoveDirection {
  Left,
  Right,
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, OnDestroy {
  @Input()
  slides!: Slide[];
  index: number = 0;
  sliderInterval: any;
  changeInterval: number = 2000;
  skip: boolean = false;

  constructor() {}

  createClone() {
    let container = document.createElement('div');
    container.addEventListener('transitionend', myEndFunction);
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.transition =
      'transform 1.5s ease-out, opacity 1.5s ease-in';
    container.style.zIndex = '2';

    let img = document.createElement('img');
    img.style.display = 'block';
    img.style.maxHeight = '750px';
    img.style.minHeight = '750px';
    img.style.width = '100%';
    img.style.objectFit = 'cover';
    img.setAttribute('src', this.slides[this.index].src);
    container.appendChild(img);

    let slideshowContainer = document.getElementById('slideshow-container');
    slideshowContainer?.insertBefore(container, slideshowContainer.firstChild);
    function myEndFunction($event: any) {
      setTimeout(() => {
        if ($event?.target?.parentNode)
          $event.target.parentNode.removeChild($event.target);
        console.log(
          'removed node, now children: ' + slideshowContainer?.children.length
        );
      }, 0);
      //slideshowContainer?.removeChild($event.target);
    }
    console.log(slideshowContainer?.children.length);
    return container;
  }

  private move(moveDirection: MoveDirection, container: any) {
    if (moveDirection == MoveDirection.Left) {
      container.style.transform = 'translate(-100vw)';
    } else container.style.transform = 'translate(100vw)';
    container.style.opacity = '0';
  }

  public doSlide(right: boolean = true, skip: boolean = false) {
    if (skip) if (!this.skip) this.skip = true;
    const container = this.createClone();
    setTimeout(() => {
      if (right) {
        this.index + 1 >= this.slides.length ? (this.index = 0) : this.index++;
        setTimeout(() => {
          this.move(MoveDirection.Right, container);
        }, 0);
      } else {
        this.index - 1 < 0
          ? (this.index = this.slides.length - 1)
          : this.index--;
        setTimeout(() => {
          this.move(MoveDirection.Left, container);
        }, 0);
      }
    }, 0);
  }

  ngOnInit(): void {
    if (!this.slides) throw Error('no input for slides');
  }

  stopInterval() {
    clearInterval(this.sliderInterval);
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }
}
