import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-gamecompany';
  pageLoaded = false;
  resolvingTime = 1500;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pageLoaded = true;
    }, this.resolvingTime);
  }
}
