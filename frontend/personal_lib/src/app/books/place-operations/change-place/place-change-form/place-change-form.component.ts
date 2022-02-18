import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/shared/crud.service';
import { BookPlace } from 'src/app/shared/models/bookPlace.model';
import { BookSubPlace } from 'src/app/shared/models/bookSubPlace.model';
import { SubPlaceFormFactory } from '../../add-place/add-place-form/subplace-form-factory.service';
import { PlaceService } from '../../place.service';

@Component({
  selector: 'app-place-change-form',
  templateUrl: './place-change-form.component.html',
  styleUrls: ['./place-change-form.component.css']
})
export class PlaceChangeFormComponent implements OnInit, OnDestroy {

  
  placeToChangeSubscr = new Subscription();
  oldPlace: BookPlace = new BookPlace();
  changedPlace: BookPlace = new BookPlace();

  //из компонента добавление типа
  myForm: FormGroup = new FormGroup({});
  subForm: FormGroup = new FormGroup({});

  subplaces: BookSubPlace[] = [];
  showSubPlaceFormToggle: boolean = false;

  submitAdmition: boolean = !true;
  //TODO не работает
  equalSubplaceNames: boolean = false;
  placeNameExistsInBase: boolean = false;
  formIsNotValid: boolean = false;

  equalSubPlaceNamesSubscribtion: Subscription = new Subscription();
  nameInDBSubscr = new Subscription();

  constructor(
    private placeService: PlaceService,
  //из компонента добавление типа
    private crudService: CrudService,
    private fb: FormBuilder,
    private subPlaceFormFactory: SubPlaceFormFactory,
    //удалить из массива удалённыъ подтипов
    private router: Router,


  ) { }

  ngOnInit(): void {
    this.placeService.oldPlace = Object.assign({}, this.placeService.placeToChange);


  //из компонента добавление типа
    this.myForm = this.fb.group({
      name: [this.placeService.placeToChange.name , Validators.required],
      description: [this.placeService.placeToChange.description], 
      subPlaces: new FormArray(
        []
      ),
    });
    //добавляем шаблоны подтипов
    for(let subPlace of this.placeService.placeToChange.bookSubPlaceList){
      this.subPlaceArray.push(this.subPlaceFormFactory.getSubPlaceForm(subPlace.name,
        subPlace.description,
        subPlace.creationDate,
        subPlace.lastChangeDate,
        subPlace.id,
      ))
    }


    //подписка на результат проверки имени
    this.nameInDBSubscr = this.placeService.isExistNameInDBEmitter.subscribe((data) => {
      this.placeNameExistsInBase = data;
    })


    //подписка на изменеие формы. Тут главное valueChanges!!!
    this.myForm.valueChanges.subscribe( (v) => {
      //эта штука, чтобы работвл checkName
      this.placeService.places.next(v);

      //Изменяем данные объекта типа
      this.placeService.changedSubplaces = v["subPlaces"];
      this.placeService.placeToChange.name = v["name"];
      this.placeService.placeToChange.description= v["description"];
      this.placeService.placeToChange.lastChangeDate = new Date();


      //индикатор наличия названия у типа и подтипов
      this.formIsNotValid = !this.myForm.valid;
      this.placeService.checkName(this.myForm.get('name')?.value);

    });

    //подписка на индикатор повторения имён субтипов
    this.equalSubPlaceNamesSubscribtion = this.placeService.isRepeatsInSubplaceNamesArrayEmitter.subscribe(data => {
      this.equalSubplaceNames = data;
    });
  }

  ngOnDestroy(): void {
    this.placeToChangeSubscr.unsubscribe();
  //из компонента добавление типа
    this.nameInDBSubscr.unsubscribe()
  }
  //из компонента добавление типа
  get subPlaceArray() {
    return (<FormArray>this.myForm.get('subPlaces'));
  }


  onSubmit() {
    //обработка массива подтипов из формы
    this.subPlaceArrayRendering(this.myForm.value.subPlaces);

    this.placeService.changePlace(this.placeService.placeToChange.bookSubPlaceList);

    this.myForm.reset();
    // this.placeService.oldPlace = new Place();

    setTimeout(() => {
      this.router.navigateByUrl("/place/change/after-submit");
    }, 1500);
//
    //TODO обрабока ошибок (связь, повтор имени),
    //TODO переадрессация на другой компонент после получения и обработки ответа с сервера,
    //TODO Передать текст ошибки на следующую страницу,
    //TODOсделать кнопку назад у следующей страницы
    //TODO отправка запроса при напечатывании для проверки уникальности имени.
    //TODO переделвть через сервис, а в него поместить DAO
  }

  //при нажатии кнопки добавить подтип
  onAddSubPlace() {
    this.subPlaceArray.push(this.subPlaceFormFactory.getSubPlaceForm());
  }
  //при нажатии кнопки удалить подтип
  removeSubPlace(i: number) {
    console.log("Перед удалением");
    console.log(this.oldPlace);
    console.log(this.placeService.placeToChange);
    let subplaces: BookSubPlace[] = this.placeService.placeToChange.bookSubPlaceList;

    if(subplaces[i]) {
      this.placeService.deletedSubplaces.push(subplaces[i])
    }
    this.subPlaceArray.removeAt(i);
    subplaces.splice(i,1);
    console.log("После удалением");
    console.log(this.oldPlace);
    console.log(this.placeService.placeToChange);
  }

  //составление массива подтипов для отправки на сервер
  subPlaceArrayRendering(subPlaceArr: any) {
    let index = 0;
    for(let sp of subPlaceArr) {
      if (index < this.placeService.placeToChange.bookSubPlaceList.length){
        let currentSubPlace = this.placeService.placeToChange.bookSubPlaceList[index]
        currentSubPlace.name = sp['subPlaceName'];
        currentSubPlace.description = sp['subPlaceDescription'];
        currentSubPlace.lastChangeDate = new Date();
        currentSubPlace.bookPlaceName = this.myForm.value.name;
      } else {
        this.placeService.placeToChange.bookSubPlaceList.push(new BookSubPlace(
          sp.subPlaceName,
          sp.subPlaceDescription,
          new Date(),
          new Date(),
          this.myForm.value.name,
        ));
      }
      index++;
    }
  }


  onNameKeyUp(event: any) {
    let name: string = event.target.value;
    this.placeService.checkName(name);
  }

  resetChanges() {
    this.placeService.placeToChange = Object.assign({}, this.placeService.oldPlace);
    for(let sp of this.placeService.deletedSubplaces) {
      this.placeService.placeToChange.bookSubPlaceList.push(sp);
    }
    //удалить из массива удалённыъ подтипов
    this.placeService.deletedSubplaces = [];
    this.ngOnInit()
  }

  backToTable() {
    this.router.navigateByUrl('/place/change/choose');
  }
}
