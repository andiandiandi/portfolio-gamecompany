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

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: 'games', component: GamesComponent }
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
    ContactUsBtnComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
