import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { BookPlace } from 'src/app/shared/models/bookPlace.model';
import { BookSubPlace } from 'src/app/shared/models/bookSubPlace.model';
import { BookSubType } from 'src/app/shared/models/bookSubType.model';
import { BookType } from 'src/app/shared/models/bookType.model';
import { BookFilter } from 'src/app/shared/models/filters/bookFilter.model';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-choose-item-delete',
  templateUrl: './choose-item-delete.component.html',
  styleUrls: ['./choose-item-delete.component.css']
})
export class ChooseItemDeleteComponent implements OnInit {

  showCarouselFlag: boolean = false;

  booksToShow: Book[] = [];
  booksToShowSubscription: Subscription = new Subscription();

  sourceList: string[] = [];

  //для фильтров
  filterData: BookFilter = new BookFilter();

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.booksToShowSubscription = this.bookService.bookListEmitter.subscribe((bookArray) => {
      this.booksToShow = bookArray;
      for(let book of this.booksToShow) {
        if(book.bookSubPlace == null) {
          book.bookSubPlace = new BookSubPlace();
        }
        if(book.bookSubType == null) {
          book.bookSubType = new BookSubType();
        }
        if(book.bookType == null) {
          book.bookType = new BookType();
        }
        if(book.bookPlace == null) {
          book.bookPlace = new BookPlace();
        }
      }
      console.log(this.booksToShow);
    });
    this.bookService.getAllBooks();
  }

  ngOnDestroy(): void {
      this.booksToShowSubscription.unsubscribe();
  }

  showCarousel(key: string) {
    this.showCarouselFlag = !this.showCarouselFlag;
    //дочтаём нужный элемент массива по ключу
    let currentBook = this.booksToShow.filter((book) => {
      return book.key == key;
    });
    this.sourceList = [];
    for(let bookPicture of currentBook[0].bookPictureList) {
      this.sourceList.push("./pictures/books/" + bookPicture.name);
    }
  }

  afterCloseCarousel() {
    this.showCarouselFlag = false
  }

  onFilterValueChanged(event: any) {
     this.filterData.byName = event.byName;
     this.filterData.byWordsInDescription= event.byWordsInDescription;
     this.filterData.key = event.byKey;
     this.filterData.fromCreationDate = event.fromCreationDate;
     this.filterData.fromLastChange = event.fromLastChange;
     this.filterData.sortType = event.sortType;
     this.filterData.tillCreationDate = event.tillCreationDate;
     this.filterData.tillLastChange= event.tillLastChange;
     this.filterData.type = event.typeName;
     this.filterData.place = event.placeName;
     this.filterData.subPlace = event.subPlaceName;
     this.filterData.subtype= event.subTypeName;
  }

  onDeleteBtnClick(event: any) {
    //TODO Тут можно воспоьзоваться ViewChild 
    // let deleteItemIndex = event.target.previousSibling.previousSibling.innerHTML; 
    let deleteItemKey = event.target.id; 
    // console.log(deleteItemIndex);
    //находим index в массиве
    // let deleteItemIndex = this.booksToShow.findIndex((book) => {book.key == deleteItem.key});
    let deleteItemIndex = -2;
    this.booksToShow.forEach((item, index, array) => {
      if(item.key == deleteItemKey) {
        deleteItemIndex = index;
      }
    });
    //Добавить в массив для удаления
    this.bookService.booksToDelete.push(this.booksToShow[deleteItemIndex]);
    //Убрать из основного массива
    this.booksToShow.splice(deleteItemIndex, 1);
    // console.log(this.ps.placesToDelete);
  }
  cancelDeletes() {
    this.booksToShow = this.booksToShow.concat(this.bookService.booksToDelete);
    this.bookService.booksToDelete = [];
  }

  submitDelete(){
    console.log("Список bookToDelete ");
    console.log(this.bookService.booksToDelete);
    this.bookService.deleteBooks();
  }
  
}
