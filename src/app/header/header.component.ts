import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  showHamburgerIcon: boolean = true;

  constructor() {}

  toggleHamburger(expand: boolean) {
    if(expand){
      this.showHamburgerIcon = false;
    }
    else{
      this.showHamburgerIcon = true;
    }
  }

  ngOnInit(): void {}
}
