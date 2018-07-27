

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [


  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
