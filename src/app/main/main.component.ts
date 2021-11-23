import { DataService } from './../shared/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { Slide } from '../shared/data.service';
import { LoadingStateService } from '../shared/loading-state.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ImagesMainService } from './images-main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  loadingState!: boolean;
  loadingStateSubscription!: Subscription;

  slides!: Slide[];

  constructor(
    private route: ActivatedRoute,
    public imagesService: ImagesMainService,
    private loadingStateService: LoadingStateService
  ) {}

  ngOnInit(): void {
    this.loadingStateSubscription =
      this.loadingStateService.loadingStateMain.subscribe((loadingState) => {
        this.loadingState = loadingState;
      });
    this.slides = this.route.snapshot.data['slides'];
  }

  ngOnDestroy(): void {
    this.loadingStateSubscription.unsubscribe();
  }
}
