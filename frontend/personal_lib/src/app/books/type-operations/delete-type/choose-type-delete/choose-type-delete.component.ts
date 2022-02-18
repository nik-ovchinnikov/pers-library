import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { BookType } from 'src/app/shared/models/bookType.model';
import { TypeService } from '../../type.service';

@Component({
  selector: 'app-choose-type-delete',
  templateUrl: './choose-type-delete.component.html',
  styleUrls: ['./choose-type-delete.component.css']
})
export class ChooseTypeDeleteComponent implements OnInit {

  types: BookType[] = [];

  typesToShow: BookType[] = [];
  typesToShowSubscription = new Subscription();


  constructor(
    private ts: TypeService,
  ) { }

  ngOnInit(): void {
    this.typesToShowSubscription = this.ts.typesAfterFilterAndSortEmitter.subscribe(typeArray => {
      this.typesToShow = typeArray;
    });
  }

  onDeleteBtnClick(event: any) {
    //TODO Тут можно воспоьзоваться ViewChild 
    // let deleteItemIndex = event.target.previousSibling.previousSibling.innerHTML; 
    let deleteItemIndex = event.target.id; 
    // console.log(deleteItemIndex);
    let typeToDelete = this.typesToShow[deleteItemIndex];

    //Добавить в массив для удаления
    this.ts.typesToDelete.push(typeToDelete);
    //Убрать из основного массива
    this.typesToShow.splice(deleteItemIndex, 1);
    // console.log(this.ts.typesToDelete);
  }
  cancelDeletes() {
    this.typesToShow = this.typesToShow.concat(this.ts.typesToDelete);
    this.ts.typesToDelete = [];
  }

  submitDelete(){
    this.ts.deleteTypes();
  }

}

