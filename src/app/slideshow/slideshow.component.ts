import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DataService, Slide } from '../shared/data.service';

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
  slides: Slide[] = [];
  index: number = 0;
  sliderInterval: any;
  changeInterval: number = 2000;
  skip: boolean = false;
  slideshowContainerWidth: number = -1;
  smartphoneWidthBreakpointInPx: number = 450;
  DesktopWidthBreakpointInPx: number = 750;

  constructor(private dataService: DataService) {}

  onResize(event: UIEvent | undefined) {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    this.slideshowContainerWidth = width;
  }

  createClone() {
    let container = document.createElement('div');
    container.addEventListener('transitionend', myEndFunction);
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    const transitionDuration =
      this.slideshowContainerWidth >= this.DesktopWidthBreakpointInPx
        ? '1.5s'
        : '.8s';
    container.style.transition =
      'transform ' + transitionDuration + ' ease-out, opacity ' + transitionDuration + ' ease-in';
    container.style.zIndex = '2';

    let img = document.createElement('img');
    img.style.display = 'block';
    img.style.maxHeight =
      this.slideshowContainerWidth >= this.DesktopWidthBreakpointInPx
        ? this.DesktopWidthBreakpointInPx + 'px'
        : this.smartphoneWidthBreakpointInPx + 'px';
    img.style.minHeight =
      this.slideshowContainerWidth >= this.DesktopWidthBreakpointInPx
        ? this.DesktopWidthBreakpointInPx + 'px'
        : this.smartphoneWidthBreakpointInPx + 'px';
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
        /*
        console.log(
          'removed node, now children: ' + slideshowContainer?.children.length
        );
        */
      }, 0);
      //slideshowContainer?.removeChild($event.target);
    }
    //console.log(slideshowContainer?.children.length);
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
    this.onResize(undefined);
  }

  stopInterval() {
    clearInterval(this.sliderInterval);
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }
}
