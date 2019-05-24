import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
