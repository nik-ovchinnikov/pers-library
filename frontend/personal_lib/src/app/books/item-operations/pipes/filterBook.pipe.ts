import { Pipe, PipeTransform } from "@angular/core";
import { Book } from "src/app/shared/models/book.model";
import { BookFilter } from "src/app/shared/models/filters/bookFilter.model";

@Pipe({
  name: 'bookFilter',
  pure: false,
})
export class FilterByNamePipe implements PipeTransform {
  transform(bookList: Book[], bookFilterData: BookFilter) {
    let bookResultArray = bookList.filter((book) => {
      return book.name.includes(bookFilterData.byName)
        && book.description.includes(bookFilterData.byWordsInDescription)
        && (+ new Date(book.lastChangeDate) > + new Date(bookFilterData.fromLastChange))
        && (+ new Date(book.lastChangeDate) < + new Date(bookFilterData.tillLastChange))
        && (+ new Date(book.creationDate) > + new Date(bookFilterData.fromCreationDate))
        && (+ new Date(book.creationDate) < + new Date(bookFilterData.tillCreationDate))
        && book.key.includes(bookFilterData.key)
        && book.bookType.name.includes(bookFilterData.type)
        && book.bookSubType.name.includes(bookFilterData.subtype)
        && book.bookPlace.name.includes(bookFilterData.place)
        && book.bookSubPlace.name.includes(bookFilterData.subPlace)
        ;

      ;
    })
    // console.log(bookResultArray);
    return this.sortFilteredArray(bookFilterData.sortType, bookResultArray);

  }
  
  sortFilteredArray(sortType: string, array: Book[]): Book[] {
    if(sortType== "changeDateDESC") {
      return this.sortByLastChangeDate(array);
    }else if(sortType == "changeDateASC") {
      return this.sortByLastChangeDate(array).reverse();
    }else if(sortType == "creatDateDESC") {
      return this.sortByCreationDate(array).reverse();
    }else if(sortType == "creatDateASC") {
      return this.sortByCreationDate(array);
    }else if(sortType == "byNameDESC") {
      return this.sortByName(array).reverse();
    }else if(sortType == "byNameASC") {
      return this.sortByName(array);
    }else {
      console.log(
        "ERROR!!! CHOOSE SORT TYPE!!!"
      );
      return [];
    }
  }
  sortByCreationDate(array: Book[]) {
    array = array.sort((a, b) => {
      if(+ new Date(a.creationDate) > + new Date(b.creationDate)) {
        return 1;
      } else if (+ new Date(a.creationDate) == + new Date(b.creationDate)) {
        return 0;
      } else {
        return -1;
      }
    });
    return array;

  }

  sortByLastChangeDate(array: Book[]) {
    array = array.sort((a, b) => {
      if(+ new Date(a.lastChangeDate) > + new Date(b.lastChangeDate)) {
        return 1;
      } else if (+ new Date(a.lastChangeDate) == + new Date(b.lastChangeDate)) {
        return 0;
      } else {
        return -1;
      }
    });
    return array;
  }
  sortByName(array: Book[]) {
    array = array.sort((a, b) => {
      if(a.name > b.name) {
        return 1;
      } else if (a.name == b.name) {
        return 0;
      } else {
        return -1;
      }
    });
    return array;

  }

}