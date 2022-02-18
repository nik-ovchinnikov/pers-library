import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take, map, Subscription, Subject} from 'rxjs';
import { CommonLibService } from 'src/app/shared/common-lib.service';
import { TypeService } from 'src/app/books/type-operations/type.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-add-subtype-form',
  templateUrl: './add-subtype-form.component.html',
  styleUrls: ['./add-subtype-form.component.css']
})
export class AddSubtypeFormComponent implements OnInit, OnDestroy {
// https://www.youtube.com/watch?v=bL9tm4Uw32I Тут про то, как работать с FormArray
  @Input() inputFormGroup = this.fb.group({});

  typesSubscription: Subscription = new Subscription();

  subTypeNames: string[] = [];

  constructor(
    private fb: FormBuilder,
    private ts: TypeService,
    private cls: CommonLibService,
  ) { }
  ngOnDestroy(): void {
    this.typesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    //составление списка имён подтипов, для проверки на неповторяемость
    this.typesSubscription = this.ts.types
      // .pipe(take(1))
      .pipe(
        map((data: {[key: string]: any}) => {
          this.subTypeNames = [];
          for(let key1 in data["subTypes"]) {
            this.subTypeNames.push(data["subTypes"][key1].subTypeName);
          }
          return this.subTypeNames
      }))
      .subscribe((data) => {
        // console.log(data);
      });
    //====================================================================
  }


  onKey(event: any) {
    this.ts.isRepeatsInSubtypeNamesArrayEmitter.next(this.cls.arrayRepeatElements(this.subTypeNames));
  }


}
