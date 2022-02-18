import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AddItemFormComponent} from "./books/item-operations/add-item/add-item-form/add-item-form.component";
import {ItemAddSubmitComponent} from "./books/item-operations/add-item/item-add-submit/item-add-submit.component";
import {ChooseItemDeleteComponent} from "./books/item-operations/delete-item/choose-item-delete/choose-item-delete.component";
import {DeleteItemSubmitComponent} from "./books/item-operations/delete-item/delete-item-submit/delete-item-submit.component";
import {ChooseItemChangeComponent} from "./books/item-operations/change-item/choose-item-change/choose-item-change.component";
import {ItemChangeFormComponent} from "./books/item-operations/change-item/item-change-form/item-change-form.component";
import {AfterItemChangeSubmitComponent} from "./books/item-operations/change-item/after-item-change-submit/after-item-change-submit.component";
import {AddItemComponent} from "./books/item-operations/add-item/add-item.component";
import {ChangeItemComponent} from "./books/item-operations/change-item/change-item.component";
import {DeleteItemComponent} from "./books/item-operations/delete-item/delete-item.component";
import {ShowItemsComponent} from "./books/item-operations/show-items/show-items.component";
import {AddTypeFormComponent} from "./books/type-operations/add-type/add-type-form/add-type-form.component";
import {TypeAddSubmitComponent} from "./books/type-operations/add-type/type-add-submit/type-add-submit.component";
import {ChooseTypeDeleteComponent} from "./books/type-operations/delete-type/choose-type-delete/choose-type-delete.component";
import {ChooseTypeChangeComponent} from "./books/type-operations/change-type/choose-type-change/choose-type-change.component";
import {TypeChangeFormComponent} from "./books/type-operations/change-type/type-change-form/type-change-form.component";
import {AfterChangeTypeSubmitComponent} from "./books/type-operations/change-type/after-change-type-submit/after-change-type-submit.component";
import {AddTypeComponent} from "./books/type-operations/add-type/add-type.component";
import {ChangeTypeComponent} from "./books/type-operations/change-type/change-type.component";
import {DeleteTypeComponent} from "./books/type-operations/delete-type/delete-type.component";
import {ShowTypesComponent} from "./books/type-operations/show-types/show-types.component";
import {AddPlaceFormComponent} from "./books/place-operations/add-place/add-place-form/add-place-form.component";
import {PlaceAddSubmitComponent} from "./books/place-operations/add-place/place-add-submit/place-add-submit.component";
import {ChoosePlaceDeleteComponent} from "./books/place-operations/delete-place/choose-place-delete/choose-place-delete.component";
import {DeletePlaceSubmitComponent} from "./books/place-operations/delete-place/delete-place-submit/delete-place-submit.component";
import {ChoosePlaceChangeComponent} from "./books/place-operations/change-place/choose-place-change/choose-place-change.component";
import {PlaceChangeFormComponent} from "./books/place-operations/change-place/place-change-form/place-change-form.component";
import {AfterChangePlaceSubmitComponent} from "./books/place-operations/change-place/after-change-place-submit/after-change-place-submit.component";
import {AddPlaceComponent} from "./books/place-operations/add-place/add-place.component";
import {ChangePlaceComponent} from "./books/place-operations/change-place/change-place.component";
import {DeletePlaceComponent} from "./books/place-operations/delete-place/delete-place.component";
import {ShowPlacesComponent} from "./books/place-operations/show-places/show-places.component";
import {MainMenuComponent} from "./header/main-menu/main-menu.component";
import {ContactsComponent} from "./header/contacts/contacts.component";
import {AboutComponent} from "./header/about/about.component";
import {SendBackupComponent} from "./header/send-backup/send-backup.component";
import {SaveChangesComponent} from "./header/save-changes/save-changes.component";
import {ItemOperationsComponent} from "./books/item-operations/item-operations.component";
import {TypeOperationsComponent} from "./books/type-operations/type-operations.component";
import {PlaceOperationsComponent} from "./books/place-operations/place-operations.component";
import {DeleteTypeSubmitComponent} from "./books/type-operations/delete-type/delete-type-submit/delete-type-submit.component";

// определение маршрутов

      // для предметов
            //добавление
            const addItemRouts: Routes = [
              { path: 'form', component: AddItemFormComponent},
              { path: 'after-submit', component: ItemAddSubmitComponent},
            ];

            //удаление
            const deleteItemRouts: Routes = [
              { path: 'choose', component: ChooseItemDeleteComponent},
              { path: 'after-submit', component: DeleteItemSubmitComponent},
            ];


            //изменеие
            const changeItemRouts: Routes = [
              { path: 'choose', component: ChooseItemChangeComponent},
              { path: 'change-form', component: ItemChangeFormComponent},
              { path: 'after-submit', component: AfterItemChangeSubmitComponent},
            ];

      //общий для предметов
      const itemRouts: Routes = [
        { path: 'add', component: AddItemComponent, children: addItemRouts},
        { path: 'change', component: ChangeItemComponent, children: changeItemRouts},
        { path: 'delete', component: DeleteItemComponent, children: deleteItemRouts},
        { path: 'show', component: ShowItemsComponent},
      ];

      // для типов
            //добавление
            const addTypeRouts: Routes = [
              { path: 'form', component: AddTypeFormComponent},
              { path: 'after-submit', component: TypeAddSubmitComponent},
            ];

            //удаление
            const deleteTypeRouts: Routes = [
              { path: 'choose', component: ChooseTypeDeleteComponent},
              { path: 'after-submit', component: DeleteTypeSubmitComponent},
            ];


            //изменение
            const changeTypeRouts: Routes = [
              { path: 'choose', component: ChooseTypeChangeComponent},
              { path: 'change-form', component: TypeChangeFormComponent},
              { path: 'after-submit', component: AfterChangeTypeSubmitComponent},
            ];

      //общий для типов
      const typeRouts: Routes = [
        { path: 'add', component: AddTypeComponent, children: addTypeRouts},
        { path: 'change', component: ChangeTypeComponent, children: changeTypeRouts},
        { path: 'delete', component: DeleteTypeComponent, children: deleteTypeRouts},
        { path: 'show', component: ShowTypesComponent},
      ];

      // для мест
            //добавление
            const addPlaceRouts: Routes = [
              { path: 'form', component: AddPlaceFormComponent},
              { path: 'after-submit', component: PlaceAddSubmitComponent},
            ];

            //удаление
            const deletePlaceRouts: Routes = [
              { path: 'choose', component: ChoosePlaceDeleteComponent},
              { path: 'after-submit', component: DeletePlaceSubmitComponent},
            ];


            //изменение
            const changePlaceRouts: Routes = [
              { path: 'choose', component: ChoosePlaceChangeComponent},
              { path: 'change-form', component: PlaceChangeFormComponent},
              { path: 'after-submit', component: AfterChangePlaceSubmitComponent},
            ];

      //общий для мест
      const placeRouts: Routes = [
        { path: 'add', component: AddPlaceComponent, children: addPlaceRouts},
        { path: 'change', component: ChangePlaceComponent, children: changePlaceRouts},
        { path: 'delete', component: DeletePlaceComponent, children: deletePlaceRouts},
        { path: 'show', component: ShowPlacesComponent},
      ];

const appRoutes: Routes =[
  { path: '', component: MainMenuComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'send-backup', component: SendBackupComponent},
  { path: 'save-changes', component: SaveChangesComponent},
  { path: 'item', component: ItemOperationsComponent, children: itemRouts},
  { path: 'type', component: TypeOperationsComponent, children: typeRouts},
  { path: 'place', component: PlaceOperationsComponent, children: placeRouts},
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
