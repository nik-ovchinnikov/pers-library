import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/shared/crud.service';
import { BookSubPlace } from 'src/app/shared/models/bookSubPlace.model';
import { BookPlace } from 'src/app/shared/models/bookPlace.model';
import { SubPlaceFormFactory } from './subplace-form-factory.service';
import { PlaceService } from '../../place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-place-form',
  templateUrl: './add-place-form.component.html',
  styleUrls: ['./add-place-form.component.css']
})
export class AddPlaceFormComponent implements OnInit, OnDestroy {

  myForm: FormGroup = new FormGroup({});
  subForm: FormGroup = new FormGroup({});

  subplaces: BookSubPlace[] = [];
  showSubPlaceFormToggle: boolean = false;

  submitAdmition: boolean = !true;
  equalSubplaceNames: boolean = false;
  placeNameExistsInBase: boolean = false;
  formIsNotValid: boolean = true;

  equalSubPlaceNamesSubscribtion: Subscription = new Subscription();
  nameInDBSubscr = new Subscription();

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
    private subPlaceFormFactory: SubPlaceFormFactory,
    private placeService: PlaceService,
    private router: Router,
  ) {
  }
  ngOnDestroy(): void {
    this.equalSubPlaceNamesSubscribtion.unsubscribe();
    this.nameInDBSubscr.unsubscribe()
  }

  get subPlaceArray() {
    return (<FormArray>this.myForm.get('subPlaces'));
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      description: [""],
      subPlaces: new FormArray([
      ]),
    });

    //подписка на результат проверки имени
    this.nameInDBSubscr = this.placeService.isExistNameInDBEmitter.subscribe((data) => {
      this.placeNameExistsInBase = data;
    })


    //подписка на изменеие формы. Тут главное valueChanges!!!
    this.myForm.valueChanges.subscribe( (v) => {
      this.placeService.places.next(v);
      // console.log(this.myForm.get('name').valid);
      //индикатор наличия названия у типа и подтипов
      this.formIsNotValid = !this.myForm.valid;
      this.placeService.checkName(this.myForm.get('name')?.value);


    });

    //подписка на индикатор повторения имён субтипов
    this.equalSubPlaceNamesSubscribtion = this.placeService.isRepeatsInSubplaceNamesArrayEmitter.subscribe(data => {
      this.equalSubplaceNames = data;
    });

  }


  onSubmit() {
    //обработка массива подтипов из формы
    this.subPlaceArrayRendering(this.myForm.value.subPlaces);
    // console.log(this.myForm.value);


    const newPlace = new BookPlace(
      this.myForm.value.name,
      this.myForm.value.description,
      this.subplaces,
    );
    // console.log(newPlace);
    // console.log(this.Form);


    this.crudService.addDAO(
      newPlace,
      'book-place/add'
    );

    this.myForm.reset();
    this.ngOnInit();
    this.subplaces = [];
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
    this.subPlaceArray.removeAt(i);
  }

  //составление массива подтипов для отправки на сервер
  subPlaceArrayRendering(subPlaceArr: any) {
    for(let st of subPlaceArr) {
      this.subplaces.push(new BookSubPlace(
        st.subPlaceName,
        st.subPlaceDescription,
        st.subPlace,
        new Date(),
        this.myForm.value.name,
      ));
    }
  }

  onNameKeyUp(event: any) {
    let name: string = event.target.value;
    this.placeService.checkName(name);
  }

  backToMenu(){
    this.router.navigateByUrl('/');
  }
}
