import { Component, Input, OnInit } from '@angular/core';

export interface Slide {
  src: string;
  title: string;
  description : string;
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input()
  slides!: Slide[];
  index : number = 0;
  sliderInterval : any;

  constructor() {}

  public doSlide(right : boolean = true){
    if(right)
      this.index + 1 >= this.slides.length? this.index = 0 : this.index++;
    else
    this.index - 1 < 0? this.index = this.slides.length-1 : this.index--;

    clearInterval(this.sliderInterval);
    this.startInterval(this.index);
  }

  private startInterval(startingIndex : number){
    this.sliderInterval = setInterval(()=>{
      this.index = startingIndex;
      this.doSlide();
    },4000);
  }

  ngOnInit(): void {
    if(!this.slides)
      throw Error("no input for slides");
    this.startInterval(0);
  }
}
