import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Component, OnDestroy, OnInit} from "@angular/core";
import { CrudService } from "src/app/shared/crud.service";
import { BookType } from "src/app/shared/models/bookType.model";
import { BookSubType } from "src/app/shared/models/bookSubType.model";
import { SubtypeFormFactory } from "./subtype-form-factory.service";
import { TypeService } from "../../type.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-type-form',
  templateUrl: './add-type-form.component.html',
  styleUrls: ['./add-type-form.component.css']
})
export class AddTypeFormComponent implements OnInit, OnDestroy {
  myForm: FormGroup = new FormGroup({});
  subForm: FormGroup = new FormGroup({});

  subtypes: BookSubType[] = [];
  showSubTypeFormToggle: boolean = false;

  submitAdmition: boolean = !true;
  equalSubtypeNames: boolean = false;
  typeNameExistsInBase: boolean = false;
  formIsNotValid: boolean = true;

  equalSubTypeNamesSubscribtion: Subscription = new Subscription();
  nameInDBSubscr = new Subscription();

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
    private subTypeFormFactory: SubtypeFormFactory,
    private typeService: TypeService,
    private router: Router,
  ) {
  }
  ngOnDestroy(): void {
    this.equalSubTypeNamesSubscribtion.unsubscribe();
    this.nameInDBSubscr.unsubscribe()
  }

  get subTypeArray() {
    return (<FormArray>this.myForm.get('subTypes'));
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      description: [""],
      subTypes: new FormArray([
      ]),
    });

    //подписка на результат проверки имени
    this.nameInDBSubscr = this.typeService.isExistNameInDBEmitter.subscribe((data) => {
      this.typeNameExistsInBase = data;
    })


    //подписка на изменеие формы. Тут главное valueChanges!!!
    this.myForm.valueChanges.subscribe( (v) => {
      this.typeService.types.next(v);
      // console.log(this.myForm.get('name').valid);
      //индикатор наличия названия у типа и подтипов
      this.formIsNotValid = !this.myForm.valid;
      this.typeService.checkName(this.myForm.get('name')?.value);


    });

    //подписка на индикатор повторения имён субтипов
    this.equalSubTypeNamesSubscribtion = this.typeService.isRepeatsInSubtypeNamesArrayEmitter.subscribe(data => {
      this.equalSubtypeNames = data;
    });

  }


  onSubmit() {
    //обработка массива подтипов из формы
    this.subTypeArrayRendering(this.myForm.value.subTypes);
    // console.log(this.myForm.value);


    const newType = new BookType(
      this.myForm.value.name,
      this.myForm.value.description,
      this.subtypes,
    );
    console.log(newType);
    // console.log(this.Form);



    this.crudService.addDAO(
      newType,
      'type/add'
    );

    this.myForm.reset();
    this.ngOnInit();
    this.subtypes = [];
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
    this.subTypeArray.removeAt(i);
  }

  //составление массива подтипов для отправки на сервер
  subTypeArrayRendering(subTypeArr: any) {
    for(let st of subTypeArr) {
      this.subtypes.push(new BookSubType(
        st.subTypeName,
        st.subTypeDescription,
        st.subType,
        new Date(),
        this.myForm.value.name,
      ));
    }
  }

  onNameKeyUp(event: any) {
    let name: string = event.target.value;
    this.typeService.checkName(name);
  }

  backToMenu(){
    this.router.navigateByUrl('/');
  }

}
