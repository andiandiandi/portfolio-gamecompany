import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService, Job } from '../shared/data.service';

interface Faq {
  question: string;
  answer: string;
  expanded: boolean;
}

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  jobs: Job[] = [];
  locations: string[] = [];
  departments: string[] = [];
  faqs: Faq[] = [];
  companyImages: { path: string }[] = [];

  selectedLocation = '';
  selectedDepartment = '';

  constructor(private dataService: DataService) {}

  toggleExpanded(selectedFaq: Faq, event: any) {
    const target = event.target as HTMLElement;
    let parent = undefined;

    if (target.tagName == 'DIV') parent = target;

    let paragraph: HTMLElement | undefined = undefined;
    //paragraph oder parent-div angeklickt
    if (parent)
      paragraph = parent.getElementsByClassName(
        'faq-container-item-answer'
      )[0] as HTMLElement;
    else
      paragraph = event.target.parentNode.getElementsByClassName(
        'faq-container-item-answer'
      )[0];

    //sync event-queue
    setTimeout(() => {
      if (!paragraph!.innerHTML) paragraph!.innerHTML = selectedFaq.answer;
      this.faqs.forEach((faq) => (faq.expanded ? (faq.expanded = false) : -1));
      selectedFaq.expanded = true;
    }, 0);
  }

  filterJobs(target: any, selectOption: string) {
    if (selectOption == 'department') this.selectedDepartment = target.value;
    else if (selectOption == 'location') this.selectedLocation = target.value;
  }

  ngOnInit(): void {
    this.jobs = this.dataService.getJobs();
    this.locations = [...new Set(this.jobs.map((job) => job.location))];
    this.departments = [...new Set(this.jobs.map((job) => job.locationType))];

    //free-to-use license
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

    this.faqs = [
      {
        question: 'Can I work from home',
        answer:
          'Yes! You can decide if you want to work in the office or from home.',
        expanded: false,
      },
      {
        question: 'Can i work remotely',
        answer:
          'Unless explicitly stated in the position’s location, most of our positions are available to work from remote.',
        expanded: false,
      },
      {
        question: 'What will my working hours look like',
        answer:
          'Productive hours differ individually. That’s why you are welcome to schedule your working hours as works best for you. However, to respect everybody’s freedom to decide when their most productive times are, we consider our core hours to be Monday to Friday, between 10:30am and 4:00pm OR whenever you have team meetings.',
        expanded: false,
      },
      {
        question: 'Can I bring my family',
        answer:
          'If you are an EU-citizen or eligible for a Blue Card this process is easy, there should be no problems.\n' +
          'If you are in none of these categories the process involves more steps, nevertheless we will assist you to bring your loved ones as soon as possible.\n' +
          'For detailed information see: <a href=https://www.berlin.de/willkommenszentrum/en/families/reunification-of-families/>https://www.berlin.de/willkommenszentrum/en/families/reunification-of-families/</a>',
        expanded: false,
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
    if (!items || !filter || !filter.filterValue) return items;
    return items.filter((job) => job[filter.property] == filter.filterValue);
  }
}
