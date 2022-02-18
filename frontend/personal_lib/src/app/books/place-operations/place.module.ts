import {NgModule} from "@angular/core";
import {PlaceOperationsComponent} from "./place-operations.component";
import {AddPlaceComponent} from "./add-place/add-place.component";
import {ChangePlaceComponent} from "./change-place/change-place.component";
import {DeletePlaceComponent} from "./delete-place/delete-place.component";
import {ShowPlacesComponent} from "./show-places/show-places.component";
import {AddPlaceFormComponent} from "./add-place/add-place-form/add-place-form.component";
import {PlaceAddSubmitComponent} from "./add-place/place-add-submit/place-add-submit.component";
import {ChoosePlaceDeleteComponent} from "./delete-place/choose-place-delete/choose-place-delete.component";
import {DeletePlaceSubmitComponent} from "./delete-place/delete-place-submit/delete-place-submit.component";
import {ChoosePlaceChangeComponent} from "./change-place/choose-place-change/choose-place-change.component";
import {PlaceChangeFormComponent} from "./change-place/place-change-form/place-change-form.component";
import {AfterChangePlaceSubmitComponent} from "./change-place/after-change-place-submit/after-change-place-submit.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import { AddSubplaceFormComponent } from './add-place/add-place-form/add-subplace-form/add-subplace-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BookPlaceFilterSortComponent } from './book-place-filter-sort/book-place-filter-sort.component';

@NgModule({
  declarations: [
    PlaceOperationsComponent,
    AddPlaceComponent,
    ChangePlaceComponent,
    DeletePlaceComponent,
    ShowPlacesComponent,
    AddPlaceFormComponent,
    PlaceAddSubmitComponent,
    ChoosePlaceDeleteComponent,
    DeletePlaceSubmitComponent,
    ChoosePlaceChangeComponent,
    PlaceChangeFormComponent,
    AfterChangePlaceSubmitComponent,
    AddSubplaceFormComponent,
    BookPlaceFilterSortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    PlaceOperationsComponent,
    AddPlaceComponent,
    ChangePlaceComponent,
    DeletePlaceComponent,
    ShowPlacesComponent,
    AddPlaceFormComponent,
    PlaceAddSubmitComponent,
    ChoosePlaceDeleteComponent,
    DeletePlaceSubmitComponent,
    ChoosePlaceChangeComponent,
    PlaceChangeFormComponent,
    AfterChangePlaceSubmitComponent,
  ],
  providers: [

  ]
})
export class PlaceModule { }
