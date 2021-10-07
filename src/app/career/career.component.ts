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

  companyImages: { path: string }[] = [];

  constructor(private dataService: DataService) {}

  filterJobs(target: any, selectOption: string) {
    if (selectOption == 'department') this.selectedDepartment = target.value;
    else if (selectOption == 'location') this.selectedLocation = target.value;
  }

  ngOnInit(): void {
    this.jobs = this.dataService.getJobs();
    this.locations = [...new Set(this.jobs.map((item) => item.location))];
    this.departments = [...new Set(this.jobs.map((item) => item.locationType))];

    this.companyImages = [
      {
        path: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechnofaq.org%2Fwp-content%2Fuploads%2F2018%2F10%2Ftax-advantaged-employee-share-schemes_322618619-1024x621.jpg&f=1&nofb=1',
      },
      {
        path: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ZaLzua1l2gQ%2FUzCaXLK0fYI%2FAAAAAAAAJqI%2FJHIP7Lu1gIs%2Fs1600%2F5654447_hiweb.jpg&f=1&nofb=1',
      },
      {
        path: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.80000hours.org%2Fwp-content%2Fuploads%2F2015%2F07%2Fworking2-fullres-100031101-orig.jpg&f=1&nofb=1',
      },
    ];
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
