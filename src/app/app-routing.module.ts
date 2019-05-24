import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './components/interface/main-page/main-page.component';
import { ErrorRedirectComponent } from './components/generalComponents/error-redirect/error-redirect.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent, pathMatch: 'full' },
  { path: '**', component: ErrorRedirectComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
