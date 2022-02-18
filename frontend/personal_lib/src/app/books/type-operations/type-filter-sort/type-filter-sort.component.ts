import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookType } from 'src/app/shared/models/bookType.model';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-type-filter-sort',
  templateUrl: './type-filter-sort.component.html',
  styleUrls: ['./type-filter-sort.component.css']
})
export class TypeFilterSortComponent implements OnInit, OnDestroy {

  types: BookType[] = [];
  typesSubscription = new Subscription();

  typesAfterFilter: BookType[] = [];

  filterForm = this.fb.group({
    "byName": [""],
    "fromCreationDate": [new Date(1970,1,1)],
    "tillCreationDate": [new Date(6999,1,1)],
    "fromLastChange": [new Date(1970,1,1)],
    "tillLastChange": [new Date(5970,1,1)],
    "byWordsInDescription": [""],
    "bySubtypesName": [""],
    "sortType": ["changeDateDESC"],
  });

  constructor(
    private fb: FormBuilder,
    private ts: TypeService,
  ) { }

  ngOnDestroy(): void {
    this.typesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ts.getAllTypeList();
    this.typesSubscription = this.ts.typeListEmitter.subscribe((typeArray) => {
      this.types = typeArray;
    });

    this.filterForm.valueChanges.subscribe((filterData: any) => {
      this.ts.filterArrayTransfer(
        this.sortFilteredArray(
          filterData,
           this.typeArrayfilter(filterData)
        )
      );
    });
  }


  typeArrayfilter(filterData: any): BookType[] {
      this.typesAfterFilter = this.types.filter((type) => {
        return type.name.includes(filterData.byName)
          && type.description.includes(filterData.byWordsInDescription)
          && type.subtypesToString().includes(filterData.bySubtypesName)
          && (+ new Date(type.creationDate) > + new Date(filterData.fromCreationDate))
          && (+ new Date(type.creationDate) < + new Date(filterData.tillCreationDate))
          && (+ new Date(type.lastChangeDate) > + new Date(filterData.fromLastChange))
          && (+ new Date(type.lastChangeDate) < + new Date(filterData.tillLastChange));
      });
      return this.typesAfterFilter;
  }

  filtersReset() {
    //TODO прописать сброс значений для каждого параметра отделнь
    this.filterForm.reset({
      "byName": "",
      "fromCreationDate": new Date(1970,1,1),
      "tillCreationDate": new Date(6970,1,1),
      "fromLastChange": new Date(1970,1,1),
      "tillLastChange": new Date(6970,1,1),
      "byWordsInDescription": "",
      "bySubtypesName": "",
      "sortType": "changeDateDESC",
    }

    );
  }

  sortFilteredArray(filterData: any, array: BookType[]): BookType[] {
    if(filterData.sortType == "changeDateDESC") {
      return this.sortByLastChangeDate(array);
    }else if(filterData.sortType == "changeDateASC") {
      return this.sortByLastChangeDate(array).reverse();
    }else if(filterData.sortType == "creatDateDESC") {
      return this.sortByCreationDate(array).reverse();
    }else if(filterData.sortType == "creatDateASC") {
      return this.sortByCreationDate(array);
    }else if(filterData.sortType == "byNameDESC") {
      return this.sortByName(array).reverse();
    }else if(filterData.sortType == "byNameASC") {
      return this.sortByName(array);
    }else {
      console.log(
        "ERROR!!! CHOOSE SORT TYPE!!!"
      );
      return [];
    }
  }
  sortByCreationDate(array: BookType[]) {
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

  sortByLastChangeDate(array: BookType[]) {
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

  sortByName(array: BookType[]) {
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
