import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookType } from 'src/app/shared/models/bookType.model';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-show-types',
  templateUrl: './show-types.component.html',
  styleUrls: ['./show-types.component.css']
})
export class ShowTypesComponent implements OnInit, OnDestroy {
//Для этих свойств нжуно установить привязку от дочернего элумента к родительскому
  typesToShow: BookType[] = [];

  allTypeListSub: Subscription = new Subscription();
  // timerID: any;  
  
  typesToShowSubscription = new Subscription();


  constructor(
    private typeServ: TypeService,
  ) { }

  ngOnInit(): void {
    
    this.typesToShowSubscription = this.typeServ.typesAfterFilterAndSortEmitter.subscribe(typeArray => {
      this.typesToShow = typeArray;
    });
  }

  ngOnDestroy(): void {
    this.typesToShowSubscription.unsubscribe();
  }



}

