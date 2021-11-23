import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { LoadingStateService } from '../shared/loading-state.service';
import { ImagesCompanyService } from './images-company.service';

interface Manager {
  name: string;
  surname: string;
  position: string;
  description: string;
  photoUrl: string;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit, OnDestroy {
  loadingState!: boolean;
  loadingStateSubscription!: Subscription;

  managers: Manager[] = [];

  constructor(
    public imagesService: ImagesCompanyService,
    private loadingStateService: LoadingStateService
  ) {}

  ngOnInit(): void {
    this.loadingStateSubscription =
      this.loadingStateService.LoadingStateCompany.subscribe((loadingState) => {
        this.loadingState = loadingState;
      });

    this.managers = [
      {
        name: 'Max',
        surname: 'Mustermann',
        position: 'CEO & Co-Founder',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.' +
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.',
        photoUrl: '',
      },
      {
        name: 'Stefan',
        surname: 'Mustermann',
        position: 'COO & Co-Founder',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.' +
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.',
        photoUrl: '',
      },
      {
        name: 'Erika',
        surname: 'Mustermann',
        position: 'Head of Studio',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.' +
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.',
        photoUrl: '',
      },
    ];
  }

  ngOnDestroy(): void {
    this.loadingStateSubscription.unsubscribe();
  }
}
