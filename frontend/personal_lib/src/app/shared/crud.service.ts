import { HttpClient, HttpParams, HttpResponse, HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommonPrototype } from "./models/common-prototype.interface";
import { BookType } from "./models/bookType.model";
import { ItemPrototype } from "./models/itemPrototype.interface";
import { Book } from "./models/book.model";



//DAO
@Injectable()
export class CrudService {

    constructor(
        private http: HttpClient
    ){}

    
    public addDAO<T>(obj: T, adress: string){
        this.http.post(
            adress,
            JSON.parse(JSON.stringify(obj))
        ).subscribe(
            responseData => {
                console.log(123);
        },
        (error) => {
            console.log(error.message);
        }
        );
    }

    public getAllDAO<T>(url: string) {
        return this.http.get<T>(url);
    }

    public checkName(url: string) {
        return this.http.get(url);
    }

    public deleteTypeList<T extends CommonPrototype>(url: string, typeArray: T[]) {
        let elemNames = "";
        //TODO надо будет укзать в форме, что нельзя использовать символы в имени, только буквы и числа 
            for(let type of typeArray) {
                elemNames = elemNames + type.id + "-";
            }
        return this.http.delete(url + "?names=" + elemNames
            // , {
            // params: new HttpParams().set('typeToDeleteNamesArray', elemNames)
        // }
        );
    }

    public deleteSubTypeList<T extends CommonPrototype>(url: string, typeArray: T[]) {
        let elemNames = "";
        //TODO надо будет укзать в форме, что нельзя использовать символы в имени, только буквы и числа 
            for(let type of typeArray) {
                elemNames = elemNames + type.id.toString() + "-";
            }
        return this.http.delete(url + "?ids=" + elemNames
            // , {
            // params: new HttpParams().set('typeToDeleteNamesArray', elemNames)
        // }
        );
    }

    public deleteItemList<T extends ItemPrototype>(url: string, itemArray: T[]) {
        // let itemKeys: string[] = [];
        // for(let item of itemArray) {
        //    itemKeys.push(item.key); 
        // }
        return this.http.post(url, itemArray);
        
    }

    public deleteOldPicturesByIds(idArray: number[]) {
       return this.http.post('book/deleteOldPictures', idArray);
    }

    public changeType<T>(url: string, typeToChange: T){
        return this.http.put(url, typeToChange);
    }
}
