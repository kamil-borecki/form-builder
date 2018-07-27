import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '../common';
import { ComponentsModule } from '../components';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [
      AppComponent,
      CreateComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      CommonModule.forRoot(),
      ComponentsModule.forRoot(),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
