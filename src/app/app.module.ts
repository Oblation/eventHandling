import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';
import { ContactsItemComponentComponent } from './contacts-item-component/contacts-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ContactsComponentComponent,
    ContactsItemComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
