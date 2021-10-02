import { Component, OnInit } from '@angular/core';

interface Car{
  brand: string;
}

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements OnInit {

  cars!: Car[];

  constructor() { }

  ngOnInit(): void {
    this.cars = [{brand:"a"},{brand:"b"},{brand:"c"}];
  }

}
