import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService, Job } from '../shared/data.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  jobs: Job[] = [];
  locations: string[] = [];
  departments: string[] = [];

  selectedLocation: string = '';
  selectedDepartment: string = '';

  constructor(private dataService: DataService) {}

  filterJobs(target: any, selectOption: string) {
    if (selectOption == 'department') this.selectedDepartment = target.value;
    else if (selectOption == 'location') this.selectedLocation = target.value;
  }

  ngOnInit(): void {
    this.jobs = this.dataService.getJobs();
    this.locations = [...new Set(this.jobs.map((item) => item.location))];
    this.departments = [...new Set(this.jobs.map((item) => item.locationType))];
  }
}

@Pipe({
  name: 'selectionFilter',
  pure: false,
})
export class SelectionFilter implements PipeTransform {
  transform(
    items: Job[],
    filter: { property: 'location' | 'locationType'; filterValue: string }
  ): any {
    if (!items || !filter || !filter.filterValue) {
      return items;
    }
    return items.filter((a: Job) => a[filter.property] == filter.filterValue);
  }
}
