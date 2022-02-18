import {NgModule} from "@angular/core";
import {ItemOperationsComponent} from "./item-operations.component";
import {AddItemComponent} from "./add-item/add-item.component";
import {ChangeItemComponent} from "./change-item/change-item.component";
import {DeleteItemComponent} from "./delete-item/delete-item.component";
import {ShowItemsComponent} from "./show-items/show-items.component";
import {AddItemFormComponent} from "./add-item/add-item-form/add-item-form.component";
import {ItemAddSubmitComponent} from "./add-item/item-add-submit/item-add-submit.component";
import {ChooseItemDeleteComponent} from "./delete-item/choose-item-delete/choose-item-delete.component";
import {DeleteItemSubmitComponent} from "./delete-item/delete-item-submit/delete-item-submit.component";
import {ChooseItemChangeComponent} from "./change-item/choose-item-change/choose-item-change.component";
import {ItemChangeFormComponent} from "./change-item/item-change-form/item-change-form.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {RouterModule} from "@angular/router";
import { AfterItemChangeSubmitComponent } from './change-item/after-item-change-submit/after-item-change-submit.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { FilterByNamePipe } from "./pipes/filterBook.pipe";
import { BookListFilterComponent } from './book-list-filter/book-list-filter.component';

@NgModule({
  declarations: [
    ItemOperationsComponent,
    AddItemComponent,
    ChangeItemComponent,
    DeleteItemComponent,
    ShowItemsComponent,
    AddItemFormComponent,
    ItemAddSubmitComponent,
    ChooseItemDeleteComponent,
    DeleteItemSubmitComponent,
    ChooseItemChangeComponent,
    ItemChangeFormComponent,
    AfterItemChangeSubmitComponent,

    FilterByNamePipe,
      BookListFilterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    
    SharedModule,
  ],
  exports: [
    ItemOperationsComponent,
    AddItemComponent,
    ChangeItemComponent,
    DeleteItemComponent,
    ShowItemsComponent,
    AddItemFormComponent,
    ItemAddSubmitComponent,
    ChooseItemDeleteComponent,
    DeleteItemSubmitComponent,
    ChooseItemChangeComponent,
    ItemChangeFormComponent,
    AfterItemChangeSubmitComponent,
  ],
  providers: [],
})
export class ItemModule {

}
