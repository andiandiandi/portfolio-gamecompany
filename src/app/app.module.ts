import { ErrorComponent } from './error/error.component';
import { GamesComponent } from './games/games.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ContactUsBtnComponent } from './contact-us-btn/contact-us-btn.component';
import { CareerComponent, SelectionFilter } from './career/career.component';
import { CompanyComponent } from './company/company.component';
import { NewsComponent } from './news/news.component';
import { PressPaneComponent } from './press-pane/press-pane.component';
import { OpenPositionsComponent } from './open-positions/open-positions.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'games', component: GamesComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'career', component: CareerComponent },
  { path: 'news', component: NewsComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SlideshowComponent,
    NavigationBarComponent,
    GamesComponent,
    ContactUsBtnComponent,
    CareerComponent,
    CompanyComponent,
    NewsComponent,
    PressPaneComponent,
    ErrorComponent,
    OpenPositionsComponent,
    SelectionFilter
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
