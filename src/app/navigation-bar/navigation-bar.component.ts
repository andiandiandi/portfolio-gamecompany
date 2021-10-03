import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  navigationStack!: string[];

  constructor(private navigationService : NavigationService) { }

  ngOnInit(): void {
    this.navigationStack = this.navigationService.getStack();
    console.log(this.navigationStack)
  }

}
