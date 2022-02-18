import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { CommonLibService } from 'src/app/shared/common-lib.service';
import { PlaceService } from '../../../place.service';

@Component({
  selector: 'app-add-subplace-form',
  templateUrl: './add-subplace-form.component.html',
  styleUrls: ['./add-subplace-form.component.css']
})
export class AddSubplaceFormComponent implements OnInit, OnDestroy {

// https://www.youtube.com/watch?v=bL9tm4Uw32I Тут про то, как работать с FormArray
@Input() inputFormGroup = this.fb.group({});

placesSubscription: Subscription = new Subscription();

subPlaceNames: string[] = [];

constructor(
  private fb: FormBuilder,
  private ps: PlaceService,
  private cls: CommonLibService,
) { }
ngOnDestroy(): void {
  this.placesSubscription.unsubscribe();
}

ngOnInit(): void {
  //составление списка имён подтипов, для проверки на неповторяемость
  this.placesSubscription = this.ps.places
    // .pipe(take(1))
    .pipe(
      map((data: {[key: string]: any}) => {
        this.subPlaceNames = [];
        for(let key1 in data["subPlaces"]) {
          this.subPlaceNames.push(data["subPlaces"][key1].subPlaceName);
        }
        return this.subPlaceNames
    }))
    .subscribe((data) => {
      // console.log(data);
    });
  //====================================================================
}


onKey(event: any) {
  this.ps.isRepeatsInSubplaceNamesArrayEmitter.next(this.cls.arrayRepeatElements(this.subPlaceNames));
}
}
