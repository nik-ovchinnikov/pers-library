import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class SubtypeFormFactory {
    constructor(
        private fb: FormBuilder,
    ) {

    }
    
    getSubTypeForm(name: string = "", description: string = "", creationDate: Date = new Date(), lastChangeDate: Date = new Date(), id:  number = -1) {
        return this.fb.group({
            subTypeName: [name, Validators.required],
            subTypeDescription: [description],
            creationDate: [creationDate],
            lastChangeDate: [lastChangeDate],
            id: [id],
        });
    }
}