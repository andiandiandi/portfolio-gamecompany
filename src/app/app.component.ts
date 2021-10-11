import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-gamecompany';
  pageLoaded = false;

  ngAfterViewInit(): void {
    var millisecondsToWait = 1000;
    setTimeout(() => {
      this.pageLoaded = true;
    },millisecondsToWait);
  }
}
