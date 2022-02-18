import { LOCALE_ID, NgModule } from '@angular/core';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from "./app-routing.module";
import {HeaderModule} from "./header/header.module";
import {ItemModule} from "./books/item-operations/item.module";
import {TypeModule} from "./books/type-operations/type.module";
import {PlaceModule} from "./books/place-operations/place.module";

import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './shared/crud.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HeaderModule,
    ItemModule,
    TypeModule,
    PlaceModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "ru" },
    CrudService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
