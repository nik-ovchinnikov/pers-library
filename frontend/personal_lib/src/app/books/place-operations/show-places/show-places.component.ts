import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookPlace } from 'src/app/shared/models/bookPlace.model';
import {PlaceService} from "../place.service";

@Component({
  selector: 'app-show-places',
  templateUrl: './show-places.component.html',
  styleUrls: ['./show-places.component.css']
})
export class ShowPlacesComponent implements OnInit, OnDestroy {
  placesToShow: BookPlace[] = [];

  allPlaceListSub: Subscription = new Subscription();
  // timerID: any;  
  
  placesToShowSubscription = new Subscription();


  constructor(
    private placeServ: PlaceService,
  ) { }

  ngOnInit(): void {
    
    this.placesToShowSubscription = this.placeServ.placesAfterFilterAndSortEmitter.subscribe(placeArray => {
      this.placesToShow = placeArray;
    });
  }

  ngOnDestroy(): void {
    this.placesToShowSubscription.unsubscribe();
  }


}
