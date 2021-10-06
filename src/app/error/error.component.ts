import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    //this.variableStateService.error404.next(false);
  }

  ngOnInit(): void {
    //this.variableStateService.error404.next(true);
  }

}
