import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgBindingComponent } from './ng-binding/ng-binding.component';
import { AttrBindingComponent } from './ng-binding/attr-binding/attr-binding.component';
import { TwowayBindingComponent } from './ng-binding/twoway-binding/twoway-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventBindingComponent } from './ng-binding/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,

    NgClassComponent,
    NgBindingComponent,
    AttrBindingComponent,
    TwowayBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
