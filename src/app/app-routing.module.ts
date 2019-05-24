import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent, pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
