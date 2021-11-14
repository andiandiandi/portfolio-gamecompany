import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showHamburgerIcon: boolean = true;
  amountOfJobs!: number;
  constructor(private dataService: DataService, private router: Router) {}

  toggleHamburger(expand: boolean) {
    expand ? (this.showHamburgerIcon = false) : (this.showHamburgerIcon = true);
  }

  ngOnInit(): void {
    this.amountOfJobs = this.dataService.getJobs().length;
  }
}
