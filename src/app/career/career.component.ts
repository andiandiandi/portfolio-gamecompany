import { Component, OnInit } from '@angular/core';
import { DataService, Job } from '../shared/data.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.jobs = this.dataService.getJobs();
  }
}
