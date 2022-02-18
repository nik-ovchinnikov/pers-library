import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { CrudService } from "src/app/shared/crud.service";
import { Book } from "src/app/shared/models/book.model";
import { BookPicture } from "src/app/shared/models/bookPicture.model";

@Injectable({providedIn: 'root'})
export class BookService {

  isExistKeyInDBEmitter = new Subject<boolean>();

  //для изменеия книги
  oldBook: Book = new Book();

  //книга перед добавлением
  resultBook: Book = new Book();
  //хранит все файлы для загрузки
  selectedFiles: File[] = [];

  //все книги
  bookFullList: Book[] = [];

  booksToShow: Book[] = [];
  bookListEmitter: Subject<Book[]> = new Subject<Book[]>();

  //deleting
  booksToDelete: Book[] = [];

  //changeItem
  itemToChange: Book = new Book();
//   oldPicture: BookPicture = new BookPicture();
  changedItem: Book = new Book();
  newPictures: BookPicture[] = [];
  oldPicturesToDelete: BookPicture[] = [];

  constructor(
      private crudServ: CrudService,
      private http: HttpClient,
  ){}
  
  checkKey(key: string){
      this.crudServ.checkName('book/checkKey?key=' + key)
          .subscribe((data: { [key: string]: any}) => {
              let marker: number = 0;
              for(let key in data) {
                  marker++;
              }
              if(marker > 0){
                  if((marker == 1) && (key == this.oldBook.key)) {
                      this.isExistKeyInDBEmitter.next(false);
                  }else{
                      this.isExistKeyInDBEmitter.next(true);
                  }
              }else{
                 this.isExistKeyInDBEmitter.next(false);
              }
          });
  }

  public addBook(){
    return this.http.post(
        '/book/add',
        this.resultBook
    )
    .pipe(map((responseData: any) => {
        const nameArray = [];
        for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
                nameArray.push(responseData[key]);
            }
        }
        return nameArray;
    }))
  }

  public getAllBooks() {
      this.crudServ.getAllDAO<Book>('/book/getAll')
        .pipe(map((responseData: any) => {
            const bookArray: Book[] = [];
            for(const key in responseData) {
                if(responseData.hasOwnProperty(key)) {
                    bookArray.push(responseData[key]);
                }
            }
            return bookArray;
        })) 
        .subscribe((books) => {
            this.bookListEmitter.next(books);
        });
  }

  public deleteBooks() {
    this.crudServ.deleteItemList('/book/deleteItems', this.booksToDelete)
    .subscribe((data) => {
        // console.log(data);
    });
  }

  public deleteBookPictures(){
    let idArray: number[] = [];
    for(let picture of this.oldPicturesToDelete) {
       idArray.push(picture.id); 
    }
     return this.crudServ.deleteOldPicturesByIds(idArray)
  }
  public changeItem() {
    return this.http.post(
        'book/update',
        this.changedItem
    )
    .pipe(map((responseData: any) => {
        const nameArray = [];
        for(const key in responseData) {
            if(responseData.hasOwnProperty(key)) {
                nameArray.push(responseData[key]);
            }
        }
        return nameArray;
    }))
  }
}