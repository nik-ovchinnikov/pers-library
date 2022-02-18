import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookPlace } from 'src/app/shared/models/bookPlace.model';
import { PlaceService } from '../../place.service';

@Component({
  selector: 'app-choose-place-change',
  templateUrl: './choose-place-change.component.html',
  styleUrls: ['./choose-place-change.component.css']
})
export class ChoosePlaceChangeComponent implements OnInit, OnDestroy {

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

  ngOnDestroy(): void {
    this.placesToShowSubscription.unsubscribe();
  }

  chooseChangeItem(place: BookPlace) {
    console.log(place);
    this.ps.placeToChange = place;
  }
}
