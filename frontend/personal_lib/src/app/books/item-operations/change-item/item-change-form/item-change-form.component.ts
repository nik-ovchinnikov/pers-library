import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaceService } from 'src/app/books/place-operations/place.service';
import { TypeService } from 'src/app/books/type-operations/type.service';
import { Book } from 'src/app/shared/models/book.model';
import { BookPicture } from 'src/app/shared/models/bookPicture.model';
import { BookPlace } from 'src/app/shared/models/bookPlace.model';
import { BookSubPlace } from 'src/app/shared/models/bookSubPlace.model';
import { BookSubType } from 'src/app/shared/models/bookSubType.model';
import { BookType } from 'src/app/shared/models/bookType.model';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-item-change-form',
  templateUrl: './item-change-form.component.html',
  styleUrls: ['./item-change-form.component.css']
})
export class ItemChangeFormComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  placeList: BookPlace[] = [];
  typeList: BookType[] = [];
  chosenType: BookType = new BookType();
  chosenPlace: BookPlace= new BookPlace();
  chosenSubType: BookSubType = new BookSubType();
  chosenSubPlace: BookSubPlace= new BookSubPlace();

  tester: any;

  //подписки
  placeListSubscr: Subscription = new Subscription();
  typeListSubscr: Subscription = new Subscription();

  //маркеры валидации
  bookKeyExistsInBase: boolean = false;
  keyCheckSubscription: Subscription = new Subscription();

  // changeBookKeyExistInBase: boolean = this.bookKeyExistsInBase && (this.bookService.itemToChange.key == );
  
  formIsNotValid: boolean = true;
  
  //объекты картинок для записи в базу
  itemPicturesToWrite: BookPicture[] = [];

  controlsBookPictures: AbstractControl[] = []; 
  bookPictures: BookPicture[] = [];

  //изменеие предмета
  oldPictures: BookPicture[] = [];


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private typeService: TypeService,
    private placeService: PlaceService,
    private bookService: BookService,
    private http: HttpClient,
  ) { }
  ngOnDestroy(): void {
    this.placeListSubscr.unsubscribe();
    this.typeListSubscr.unsubscribe();
    this.keyCheckSubscription.unsubscribe();
  }

  ngOnInit(): void {
    //очищаем массив с файлами
    this.bookService.selectedFiles = [];

    console.log("before start");
    console.log(this.bookService.itemToChange);

    //старые фото
    this.bookService.oldBook.key = this.bookService.itemToChange.key;
    this.oldPictures = this.bookService.itemToChange.bookPictureList;

    this.createItemChanged();

    this.prepareChosenVars();

    this.getPlaceTypeLists();

    
    //подписка на состаяние уникальности ключа
    this.keyCheckSubscription = this.bookService.isExistKeyInDBEmitter.subscribe((data) => {
      this.bookKeyExistsInBase = data;
    });

    //создание формы
    this.formInitialization();

    this.controlsBookPictures = (<FormArray>this.myForm.get('bookPictures')).controls;
    this.formChangeSubscribe();

  }

  backToMenu() {
    this.router.navigateByUrl('/');
  }

  //проверка уникальности ключа
  onKeyInputPrint(event: any) {
    let key = event.target.value;
  }

  onSubmit() {

    //Даты не забудь!!!
    this.bookService.changedItem.lastChangeDate= new Date();
    // Object.assign(
    //   this.bookService.changedItem.bookPictureList,
    //   this.oldPictures
    // );
    for(let picture of this.bookService.newPictures) {
      this.bookService.changedItem.bookPictureList.push(picture);
    }
    this.bookService.newPictures = [];
    //Переименовка файла после добавления книги
    // сброс формы, удаление всех фото, обнуления массива FormFrray и selectedFiles
    this.bookService.deleteBookPictures()
    .subscribe(() => {

    this.bookService.changeItem()
    .subscribe((names) => {
        let i = 0;
        // Запрос с добавлением файлов
        for (let file of this.bookService.selectedFiles) {
            const fd = new FormData();
            fd.append("file", file);
            fd.append("fileName", names[i]); 
            this.http.post(
              '/book-files/addFile',
              fd
            ).subscribe( res => {});
            i++;
        }


        this.cleanForm();
        this.router.navigateByUrl('/');
    });
    })
    ;
    // disabled = true
  }

   //По нажатии кнопки добавляет ещё одну форму для выгрузки фойла
  onAddPhotoPath() {
    const control = new FormControl(null);
    (<FormArray>this.myForm.get('bookPictures')).push(control);
  }

  //после нажатия на кнопку "удалить"
  onClickDeletePicture(event: any) {
    // event.preventDefault();
    let fileToRemove: File = new File([], "");
    let fileNameToRemove = event.target.getAttribute("fileName");

    //можно заменить фильтром или пайпом
    if(fileNameToRemove != null) {
      this.bookService.selectedFiles.forEach((file) => {
        if(file.name == fileNameToRemove) {
          fileToRemove = file;
        }
      });

      this.bookService.selectedFiles.splice(this.bookService.selectedFiles.indexOf(fileToRemove), 1);
      //непосредственно удаление

      event.target.parentNode.parentNode.remove();
      //удалить обхект картинки из resultBook

      this.bookService.newPictures.splice(this.bookService.newPictures.length - 1, 1);
    }
  }

    //Действия после добавления файла
  onFileAdded(event: any) {
          if(event.target.nextSibling.getAttribute("wasUploaded") == "false"){
  
            event.target.nextSibling.setAttribute("fileName", event.target.files[0].name);
            event.target.nextSibling.setAttribute("wasUploaded", "true");
            //проверка имени файла на уникальность
  
  
            //добавление файла в массив
            this.bookService.selectedFiles.push(event.target.files[0]);
            //добавление в итоговый объект картинку
            this.bookService.newPictures.push(new BookPicture());
          }else{
            //удаляем старую фото
            let fileToRemove: File =  new File([], "");
            let fileNameToRemove = event.target.nextSibling.getAttribute("fileName");
            this.bookService.selectedFiles.forEach((file) => {
              if(file.name == fileNameToRemove) {
                fileToRemove = file;
              }
            });
            this.bookService.selectedFiles.splice(this.bookService.selectedFiles.indexOf(fileToRemove), 1);
  
            //проверка имени на уникальность
  
  
            //добавляем новое фото
            event.target.nextSibling.setAttribute("fileName", event.target.files[0].name);
            this.bookService.selectedFiles.push(event.target.files[0]);
            console.log(this.bookService.selectedFiles);
            
          }
          //передадим этот файл в изображение
          //перенести в службу!!!! addItem
          const reader = new FileReader();
          reader.onloadend = () => {
            event.target.nextSibling.nextSibling.src = reader.result;  
          }
          reader.readAsDataURL(event.target.files[0]);
  }

  onClickDeleteOldPicture(event: any){
    let pictureName = event.target.id;
    let index = this.oldPictures.findIndex((picture) => {
      return picture.name == pictureName;
    });
    this.bookService.oldPicturesToDelete.push(this.oldPictures[index]);
    this.oldPictures.splice(index, 1);
    this.bookService.changedItem.bookPictureList.splice(index, 1);
  }

  resetChanges() {
    this.bookService.selectedFiles = [];

    this.createItemChanged();

    this.myForm.patchValue({
      name: this.bookService.itemToChange.name,
      key: this.bookService.itemToChange.key,
      description: this.bookService.itemToChange.description, 
      typeName: this.bookService.itemToChange.bookType.name, 
      subTypeName: this.bookService.itemToChange.bookSubType.name,
      placeName: this.bookService.itemToChange.bookPlace.name, 
      subPlaceName: this.bookService.itemToChange.bookSubPlace.name,
    });

    this.bookService.oldBook.key = this.bookService.itemToChange.key;
    this.bookService.checkKey(this.bookService.itemToChange.key);

    for(let picture of this.bookService.oldPicturesToDelete) {
      this.bookService.itemToChange.bookPictureList.push(picture);

    }
    this.bookService.booksToDelete = [];
    this.bookService.oldPicturesToDelete = [];
  }

  cleanForm() {
        this.bookService.selectedFiles = [];
        this.bookService.changedItem.bookPictureList = [];
        this.bookService.newPictures = [];
        this.bookService.oldPicturesToDelete = [];
        this.chosenType = new BookType();
        this.chosenPlace = new BookPlace();
        this.chosenSubType = new BookSubType();
        this.chosenSubPlace = new BookSubPlace();
        this.bookService.changedItem.bookSubPlace = new BookSubPlace();
        this.bookService.changedItem.bookSubType= new BookSubType();

        this.bookService.itemToChange = new Book();
        // this.ngOnInit();
        // this.myForm.reset();
        // this.myForm.get("bookPictures")?.setValue(new FormArray([]));
  }

  sendingFileToServer() {

  }

  formInitialization() {
    this.myForm = this.fb.group({
      name: [this.bookService.itemToChange.name, Validators.required],
      key: [this.bookService.itemToChange.key, Validators.required],
      description: [this.bookService.itemToChange.description, Validators.required],
      typeName: [this.bookService.itemToChange.bookType.name, Validators.required],
      subTypeName: [this.bookService.itemToChange.bookSubType.name, Validators.required],
      placeName: [this.bookService.itemToChange.bookPlace.name, Validators.required],
      subPlaceName: [this.bookService.itemToChange.bookSubPlace.name],
      bookPictures: new FormArray([
      ]),
    });
  }

  formChangeSubscribe() {
    //подписки на изменение формы
    this.myForm.get("typeName")?.valueChanges.subscribe((data) => {
      this.tester = this.typeList.filter((type) => {
        return type.name.includes(data);
      });
      this.chosenType = this.tester[0];
      this.bookService.changedItem.bookType =this.chosenType;
      // this.bookService.changedItem.bookSubType.id = -1;
      this.myForm.patchValue({subTypeName: this.chosenType.bookSubTypeList[0].name});
    });

    this.myForm.get("placeName")?.valueChanges.subscribe((data) => {
      this.tester = this.placeList.filter((place) => {
        return place.name.includes(data);
      });
      this.chosenPlace= this.tester[0];
      this.bookService.changedItem.bookPlace = this.chosenPlace;
      // this.bookService.changedItem.bookSubPlace.id = -1;
      this.myForm.patchValue({subPlaceName: this.chosenPlace.bookSubPlaceList[0].name});
    });

    this.myForm.get("subTypeName")?.valueChanges.subscribe((data) => {
      this.tester = this.chosenType.bookSubTypeList.filter((subType) => {
        return subType.name.includes(data);
      });
      this.chosenSubType = this.tester[0];
      this.bookService.changedItem.bookSubType = this.chosenSubType;
    });

    this.myForm.get("subPlaceName")?.valueChanges.subscribe((data) => {
      this.tester = this.chosenPlace.bookSubPlaceList.filter((subPlace) => {
        return subPlace.name.includes(data);
      });
      this.chosenSubPlace = this.tester[0];
      this.bookService.changedItem.bookSubPlace = this.chosenSubPlace;
    });

    this.myForm.get("key")?.valueChanges.subscribe((data) => {
      this.bookService.checkKey(data);
      this.bookService.changedItem.key = data;
    });

    this.myForm.get("name")?.valueChanges.subscribe((data) => {
      this.bookService.changedItem.name= data;
    });

    this.myForm.get("description")?.valueChanges.subscribe((data) => {
      this.bookService.changedItem.description= data;
    });

    this.myForm.valueChanges.subscribe(() => {
      this.formIsNotValid = !this.myForm.valid;
    });
  }

  createItemChanged() {
    //Создание изменённого объекта
    this.bookService.changedItem.name = this.bookService.itemToChange.name;
    this.bookService.changedItem.description = this.bookService.itemToChange.description;
    this.bookService.changedItem.lastChangeDate = this.bookService.itemToChange.lastChangeDate;
    this.bookService.changedItem.creationDate = this.bookService.itemToChange.creationDate;
    this.bookService.changedItem.key = this.bookService.itemToChange.key;
    this.bookService.changedItem.id = this.bookService.itemToChange.id;
    this.bookService.changedItem.bookPlace = Object.assign(this.bookService.itemToChange.bookPlace);
    this.bookService.changedItem.bookSubPlace = Object.assign(this.bookService.itemToChange.bookSubPlace);
    this.bookService.changedItem.bookType = Object.assign(this.bookService.itemToChange.bookType);
    this.bookService.changedItem.bookSubType = Object.assign(this.bookService.itemToChange.bookSubType);

  }

  prepareChosenVars() {
    this.chosenPlace = this.bookService.itemToChange.bookPlace;
    this.chosenType = this.bookService.itemToChange.bookType
    this.chosenSubType = this.bookService.itemToChange.bookSubType;
    this.chosenSubPlace = this.bookService.itemToChange.bookSubPlace;
  }

  getPlaceTypeLists() {

    //получение типов и места хранения
    this.placeListSubscr = this.placeService.placeListEmitter.subscribe((data) => {
      this.placeList = data;
    }); 
    this.typeListSubscr = this.typeService.typeListEmitter.subscribe((data) => {
      this.typeList = data;
    }); 

    this.placeService.getAllPlaceList();
    this.typeService.getAllTypeList();
  }
}
