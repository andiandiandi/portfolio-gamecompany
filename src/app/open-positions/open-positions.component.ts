import { Component, Input, OnInit } from '@angular/core';
import { DataService, Job } from '../shared/data.service';

@Component({
  selector: 'app-open-positions',
  templateUrl: './open-positions.component.html',
  styleUrls: ['./open-positions.component.scss'],
})
export class OpenPositionsComponent implements OnInit {
  @Input()
  amountToShow!: number;

  @Input()
  widthInPercent: number = 100;

  @Input()
  backgroundImage: boolean = true;

  @Input()
  itemCounter: boolean = false;

  @Input()
  jobs: Job[] = [];

  @Input()
  header: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (!this.jobs) this.jobs = this.dataService.getJobs();
    if (this.amountToShow)
      this.jobs = this.dataService.getJobs().slice(0, this.amountToShow);
  }
}
