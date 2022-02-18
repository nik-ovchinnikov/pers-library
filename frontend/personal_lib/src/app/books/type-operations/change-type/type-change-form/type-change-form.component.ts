import { Component, OnDestroy, OnInit } from '@angular/core';
//удалить из массива удалённыъ подтипов
//удалить из массива удалённыъ подтипов
//удалить из массива удалённыъ подтипов
//удалить из массива удалённыъ подтипов
//удалить из массива удалённыъ подтипов
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
//удалить из массива удалённыъ подтипов
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/shared/crud.service';
import { BookSubType } from 'src/app/shared/models/bookSubType.model';
import { BookType } from 'src/app/shared/models/bookType.model';
import { SubtypeFormFactory } from '../../add-type/add-type-form/subtype-form-factory.service';
import { TypeService } from '../../type.service';

@Component({
  selector: 'app-type-change-form',
  templateUrl: './type-change-form.component.html',
  styleUrls: ['./type-change-form.component.css']
})
export class TypeChangeFormComponent implements OnInit, OnDestroy {

  typeToChangeSubscr = new Subscription();
  oldType: BookType = new BookType();
  changedType: BookType = new BookType();

  //из компонента добавление типа
  myForm: FormGroup = new FormGroup({});
  subForm: FormGroup = new FormGroup({});

  subtypes: BookSubType[] = [];
  showSubTypeFormToggle: boolean = false;

  submitAdmition: boolean = !true;
  //TODO не работает
  equalSubtypeNames: boolean = false;
  typeNameExistsInBase: boolean = false;
  formIsNotValid: boolean = false;

  equalSubTypeNamesSubscribtion: Subscription = new Subscription();
  nameInDBSubscr = new Subscription();

  constructor(
    private typeService: TypeService,
  //из компонента добавление типа
    private crudService: CrudService,
    private fb: FormBuilder,
    private subTypeFormFactory: SubtypeFormFactory,
    //удалить из массива удалённыъ подтипов
    private router: Router,


  ) { }

  ngOnInit(): void {
    this.typeService.oldType = Object.assign({}, this.typeService.typeToChange);


  //из компонента добавление типа
    this.myForm = this.fb.group({
      name: [this.typeService.typeToChange.name , Validators.required],
      description: [this.typeService.typeToChange.description], 
      subTypes: new FormArray(
        []
      ),
    });
    //добавляем шаблоны подтипов
    for(let subType of this.typeService.typeToChange.bookSubTypeList){
      this.subTypeArray.push(this.subTypeFormFactory.getSubTypeForm(subType.name,
        subType.description,
        subType.creationDate,
        subType.lastChangeDate,
        subType.id,
      ))
    }


    //подписка на результат проверки имени
    this.nameInDBSubscr = this.typeService.isExistNameInDBEmitter.subscribe((data) => {
      this.typeNameExistsInBase = data;
    })


    //подписка на изменеие формы. Тут главное valueChanges!!!
    this.myForm.valueChanges.subscribe( (v) => {
      //эта штука, чтобы работвл checkName
      this.typeService.types.next(v);

      //Изменяем данные объекта типа
      this.typeService.changedSubtypes = v["subTypes"];
      this.typeService.typeToChange.name = v["name"];
      this.typeService.typeToChange.description= v["description"];
      this.typeService.typeToChange.lastChangeDate = new Date();


      //индикатор наличия названия у типа и подтипов
      this.formIsNotValid = !this.myForm.valid;
      this.typeService.checkName(this.myForm.get('name')?.value);

    });

    //подписка на индикатор повторения имён субтипов
    this.equalSubTypeNamesSubscribtion = this.typeService.isRepeatsInSubtypeNamesArrayEmitter.subscribe(data => {
      this.equalSubtypeNames = data;
    });
  }

  ngOnDestroy(): void {
    this.typeToChangeSubscr.unsubscribe();
  //из компонента добавление типа
    this.nameInDBSubscr.unsubscribe()
  }
  //из компонента добавление типа
  get subTypeArray() {
    return (<FormArray>this.myForm.get('subTypes'));
  }


  onSubmit() {
    //обработка массива подтипов из формы
    this.subTypeArrayRendering(this.myForm.value.subTypes);

    this.typeService.changeType(this.typeService.typeToChange.bookSubTypeList);

    this.myForm.reset();
    // this.typeService.oldType = new Type();

    setTimeout(() => {
      this.router.navigateByUrl("/type/change/after-submit");
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
  onAddSubType() {
    this.subTypeArray.push(this.subTypeFormFactory.getSubTypeForm());
  }
  //при нажатии кнопки удалить подтип
  removeSubType(i: number) {
    console.log("Перед удалением");
    console.log(this.oldType);
    console.log(this.typeService.typeToChange);
    let subtypes: BookSubType[] = this.typeService.typeToChange.bookSubTypeList;

    if(subtypes[i]) {
      this.typeService.deletedSubtypes.push(subtypes[i])
    }
    this.subTypeArray.removeAt(i);
    subtypes.splice(i,1);
    console.log("После удалением");
    console.log(this.oldType);
    console.log(this.typeService.typeToChange);
  }

  //составление массива подтипов для отправки на сервер
  subTypeArrayRendering(subTypeArr: any) {
    let index = 0;
    for(let st of subTypeArr) {
      if (index < this.typeService.typeToChange.bookSubTypeList.length){
        let currentSubType = this.typeService.typeToChange.bookSubTypeList[index]
        currentSubType.name = st['subTypeName'];
        currentSubType.description = st['subTypeDescription'];
        currentSubType.lastChangeDate = new Date();
        currentSubType.bookTypeName = this.myForm.value.name;
      } else {
        this.typeService.typeToChange.bookSubTypeList.push(new BookSubType(
          st.subTypeName,
          st.subTypeDescription,
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
    this.typeService.checkName(name);
  }

  resetChanges() {
    this.typeService.typeToChange = Object.assign({}, this.typeService.oldType);
    for(let st of this.typeService.deletedSubtypes) {
      this.typeService.typeToChange.bookSubTypeList.push(st);
    }
    //удалить из массива удалённыъ подтипов
    this.typeService.deletedSubtypes = [];
    this.ngOnInit()
  }

  backToTable() {
    this.router.navigateByUrl('/type/change/choose');
  }
}
