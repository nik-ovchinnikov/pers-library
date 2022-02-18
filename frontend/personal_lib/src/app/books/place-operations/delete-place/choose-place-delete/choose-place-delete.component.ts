import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookPlace } from 'src/app/shared/models/bookPlace.model';
import { PlaceService } from '../../place.service';

@Component({
  selector: 'app-choose-place-delete',
  templateUrl: './choose-place-delete.component.html',
  styleUrls: ['./choose-place-delete.component.css']
})
export class ChoosePlaceDeleteComponent implements OnInit {

  places: BookPlace[] = [];

  placesToShow: BookPlace[] = [];
  placesToShowSubscription = new Subscription();


  constructor(
    private ps: PlaceService,
  ) { }

  ngOnInit(): void {
    this.placesToShowSubscription = this.ps.placesAfterFilterAndSortEmitter.subscribe(placeArray => {
      this.placesToShow = placeArray;
    }); 
  }

  onDeleteBtnClick(event: any) {
    //TODO Тут можно воспоьзоваться ViewChild 
    // let deleteItemIndex = event.target.previousSibling.previousSibling.innerHTML; 
    let deleteItemIndex = event.target.id; 
    // console.log(deleteItemIndex);
    let placeToDelete = this.placesToShow[deleteItemIndex];

    //Добавить в массив для удаления
    this.ps.placesToDelete.push(placeToDelete);
    //Убрать из основного массива
    this.placesToShow.splice(deleteItemIndex, 1);
    // console.log(this.ps.placesToDelete);
  }
  cancelDeletes() {
    this.placesToShow = this.placesToShow.concat(this.ps.placesToDelete);
    this.ps.placesToDelete = [];
  }

  submitDelete(){
    this.ps.deletePlaces();
  }
}
