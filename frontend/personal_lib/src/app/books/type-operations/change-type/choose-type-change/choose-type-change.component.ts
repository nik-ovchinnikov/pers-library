import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { BookType } from 'src/app/shared/models/bookType.model';
import { TypeService } from '../../type.service';

@Component({
  selector: 'app-choose-type-change',
  templateUrl: './choose-type-change.component.html',
  styleUrls: ['./choose-type-change.component.css']
})
export class ChooseTypeChangeComponent implements OnInit, OnDestroy{
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

  ngOnDestroy(): void {
    this.typesToShowSubscription.unsubscribe();
  }

  chooseChangeItem(type: BookType) {
    console.log(type);
    this.ts.typeToChange = type;
  }

}
