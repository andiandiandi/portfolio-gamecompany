import { Component, OnInit } from '@angular/core';

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
export class CompanyComponent implements OnInit {
  managers: Manager[] = [];

  constructor() {}

  ngOnInit(): void {
    this.managers = [
      {
        name: 'Max',
        surname: 'Mustermann',
        position: 'CEO & Co-Founder',
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum."
          +"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.",
        photoUrl: '',
      },
      {
        name: 'Stefan',
        surname: 'Mustermann',
        position: 'COO & Co-Founder',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.'
          +'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.',
          photoUrl: '',
      },
      {
        name: 'Erika',
        surname: 'Mustermann',
        position: 'Head of Studio',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.'
          +'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus totam voluptas tempora, facilis dolores ullam, maxime quae porro id corporis quisquam, dignissimos illo sunt perferendis asperiores quidem tempore voluptatum.',
          photoUrl: '',
      },
    ];
  }
}
