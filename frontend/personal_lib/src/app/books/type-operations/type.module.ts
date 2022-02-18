import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

import {TypeOperationsComponent} from "./type-operations.component";
import {AddTypeComponent} from "./add-type/add-type.component";
import {ChangeTypeComponent} from "./change-type/change-type.component";
import {DeleteTypeComponent} from "./delete-type/delete-type.component";
import {ShowTypesComponent} from "./show-types/show-types.component";
import {AddTypeFormComponent} from "./add-type/add-type-form/add-type-form.component";
import {TypeAddSubmitComponent} from "./add-type/type-add-submit/type-add-submit.component";
import {ChooseTypeChangeComponent} from "./change-type/choose-type-change/choose-type-change.component";
import {TypeChangeFormComponent} from "./change-type/type-change-form/type-change-form.component";
import {AfterChangeTypeSubmitComponent} from "./change-type/after-change-type-submit/after-change-type-submit.component";
import {ChooseTypeDeleteComponent} from "./delete-type/choose-type-delete/choose-type-delete.component";
import {DeleteTypeSubmitComponent } from './delete-type/delete-type-submit/delete-type-submit.component';

import { TypeService } from "./type.service";
import { AddSubtypeFormComponent } from './add-type/add-type-form/add-subtype-form/add-subtype-form.component';
import { TypeFilterSortComponent } from './type-filter-sort/type-filter-sort.component';

@NgModule({
  declarations: [
    TypeOperationsComponent,
    AddTypeComponent,
    ChangeTypeComponent,
    DeleteTypeComponent,
    ShowTypesComponent,
    AddTypeFormComponent,
    TypeAddSubmitComponent,
    ChooseTypeChangeComponent,
    TypeChangeFormComponent,
    AfterChangeTypeSubmitComponent,
    ChooseTypeDeleteComponent,
    DeleteTypeSubmitComponent,
    AddSubtypeFormComponent,
    TypeFilterSortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    TypeOperationsComponent,
    AddTypeComponent,
    ChangeTypeComponent,
    DeleteTypeComponent,
    ShowTypesComponent,
    AddTypeFormComponent,
    TypeAddSubmitComponent,
    ChooseTypeChangeComponent,
    TypeChangeFormComponent,
    AfterChangeTypeSubmitComponent,
    ChooseTypeDeleteComponent,
    DeleteTypeSubmitComponent,
    AddSubtypeFormComponent,
  ],
  providers: [
    TypeService,
  ]
})
export class TypeModule { }
