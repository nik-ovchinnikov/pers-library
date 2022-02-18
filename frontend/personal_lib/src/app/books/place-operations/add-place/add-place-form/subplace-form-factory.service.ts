import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class SubPlaceFormFactory {
    constructor(
        private fb: FormBuilder,
    ) {

    }
    
    getSubPlaceForm(name: string = "", description: string = "", creationDate: Date = new Date(), lastChangeDate: Date = new Date(), id:  number = -1) {
        return this.fb.group({
            subPlaceName: [name, Validators.required],
            subPlaceDescription: [description],
            creationDate: [creationDate],
            lastChangeDate: [lastChangeDate],
            id: [id],
        });
    }
}