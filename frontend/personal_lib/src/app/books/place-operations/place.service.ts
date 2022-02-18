import {map, Subject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { BookPlace } from "src/app/shared/models/bookPlace.model";
import { BookSubPlace } from "src/app/shared/models/bookSubPlace.model";
import { CrudService } from "src/app/shared/crud.service";

@Injectable({providedIn: 'root'})
export class PlaceService {
  places = new Subject<BookPlace[]>();
  placeListEmitter = new Subject<BookPlace[]>();

  //для фильтра и сортировки списка
  placesAfterFilterAndSortEmitter = new Subject<BookPlace[]>();

  //для валидации форм
  isRepeatsInSubplaceNamesArrayEmitter = new Subject<boolean>();
  isExistNameInDBEmitter = new Subject<boolean>();

  //для удаления
  placesToDelete: BookPlace[] = [];
  placeToDeleteSubscription = new Subscription();

  //для изменения типа
  placeToChangeEmitter = new Subject<BookPlace>();
  placeToChange: BookPlace = new BookPlace();
  oldPlace: BookPlace = new BookPlace();
  currentChangePlaceFormValues: any;

  //для изменения списка подтипов
  deletedSubplaces: BookSubPlace[] = [];
  changedSubplaces: BookSubPlace[] = [];
  newSubplaces: BookSubPlace[] = [];
  oldSubplaceArray: BookSubPlace[] = [];


//TODO сделать touched На валидацию поля имя вначале


  constructor(
      private crudServ: CrudService,
  ){}

  filterArrayTransfer(arrayFiltered: BookPlace[]) {
      this.placesAfterFilterAndSortEmitter.next(arrayFiltered);
  }

  getAllPlaceList() {
      this.crudServ.getAllDAO<BookPlace>('book-place/getAll')

      //FIXME избавиться от any в index signature!!!
      //FIXME постараться обобщить пайп для всех методов!!! ПРОВАЛЕНО
      // 1) сделать интерфейс, в котором есть метод заполняющий поля,
      // 2) каждая модель наследует этот интерфейс
      // 3) это наследование прописывается в generic метода pipeDAO
      // 4) метод заполнения полей вызывается в pipeDAO, экземпляр вводится через аргументы
          .pipe(map((data: { [key: string]: any}) => {
              let classArray = [];
              for(let key in data) {
                  let argArray: string[] = [];
                  for(let key2 in data[key]) {
                      argArray.push(data[key][key2]);
                  }
                  classArray.push(new BookPlace(...argArray));
                  argArray = [];
              }
              return classArray;
          }))
          .subscribe(
              data => {
                  this.placeListEmitter.next(data);
                  this.placesAfterFilterAndSortEmitter.next(data);
              }

          );
  }

  checkName(name: string){
      this.crudServ.checkName('book-place/checkName?name=' + name)
          .subscribe((data: { [key: string]: any}) => {
              let oldPlaceName = "";
              let marker: number = 0;
              for(let key in data) {
                  marker++;
                  if(marker == 1){
                      oldPlaceName = data[key].name;
                  }
              }
              if(marker > 0){
                  if((marker == 1) && (oldPlaceName == this.oldPlace.name)) {
                      this.isExistNameInDBEmitter.next(false);
                  }else{
                      this.isExistNameInDBEmitter.next(true);
                  }
              }else{
                 this.isExistNameInDBEmitter.next(false);
              }
          });
  }

  deletePlaces() {
      let url = "book-place/deleteList";
      this.crudServ.deleteTypeList<BookPlace>(url, this.placesToDelete)
          .subscribe((data) => {
              console.log(data);
          });
  }

  changePlace(stArray: BookSubPlace[]) {
      //удалить из базы удалённые подтипы
      if(this.deletedSubplaces.length > 0){
          this.crudServ.deleteSubTypeList<BookSubPlace>('book-subplace/deleteList', this.deletedSubplaces)
              .subscribe((data: any) => {
              }
          );
      }
      //составление массива подтипров для записи/изменеия
      console.log("Перед отправкой");
      console.log(this.placeToChange);
      //изменение
      this.crudServ.changeType('book-place/update', this.placeToChange).subscribe((data) => {
          console.log(data);
      })

  }
}
