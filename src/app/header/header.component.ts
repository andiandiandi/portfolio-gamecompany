import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showHamburgerIcon: boolean = true;

  constructor(private router: Router) {}

  toggleHamburger(expand: boolean) {
    if (expand) {
      this.showHamburgerIcon = false;
    } else {
      this.showHamburgerIcon = true;
    }
  }

  ngOnInit(): void {}
}
