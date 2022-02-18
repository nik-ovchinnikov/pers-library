import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { BookPlace } from 'src/app/shared/models/bookPlace.model';
import { BookSubPlace } from 'src/app/shared/models/bookSubPlace.model';
import { BookSubType } from 'src/app/shared/models/bookSubType.model';
import { BookType } from 'src/app/shared/models/bookType.model';
import { BookFilter } from 'src/app/shared/models/filters/bookFilter.model';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-choose-item-change',
  templateUrl: './choose-item-change.component.html',
  styleUrls: ['./choose-item-change.component.css']
})
export class ChooseItemChangeComponent implements OnInit {


  showCarouselFlag: boolean = false;

  booksToShow: Book[] = [];
  booksToShowSubscription: Subscription = new Subscription();

  sourceList: string[] = [];

  //для фильтров
  filterData: BookFilter = new BookFilter();

  constructor(
    private bookService: BookService,
    private router: Router,
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

  onChangeBtnClick(event: any) {
    //TODO Тут можно воспоьзоваться ViewChild 
    // let deleteItemIndex = event.target.previousSibling.previousSibling.innerHTML; 
    let changeItemKey = event.target.id; 
    // console.log(deleteItemIndex);
    //находим index в массиве
    // let deleteItemIndex = this.booksToShow.findIndex((book) => {book.key == deleteItem.key});
    let changeItemIndex = -2;
    this.booksToShow.forEach((item, index, array) => {
      if(item.key == changeItemKey) {
        changeItemIndex = index;
      }
    });
    this.bookService.itemToChange = this.booksToShow[changeItemIndex];
    //Добавить в массив для удаления
    // this.bookService.booksToDelete.push(this.booksToShow[changeItemIndex]);
    //Убрать из основного массива
    // this.booksToShow.splice(changeItemIndex, 1);
    // console.log(this.ps.placesToDelete);
    this.router.navigateByUrl('/item/change/change-form');
  }

}
