import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from 'src/common';
import { ComponentsModule } from 'src/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create';
import { ShowComponent } from './show';
import { PreviewComponent } from './preview';

@NgModule({
   declarations: [
      AppComponent,
      CreateComponent,
      ShowComponent,
      PreviewComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
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
