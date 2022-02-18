import { Injectable } from "@angular/core";
import { map, Subject, Subscription } from "rxjs";
import { CrudService } from "../../shared/crud.service";
import { BookSubType } from "../../shared/models/bookSubType.model";
import { BookType } from "../../shared/models/bookType.model";

@Injectable({providedIn: 'root'})
export class TypeService {

    types = new Subject<BookType[]>();
    typeListEmitter = new Subject<BookType[]>();

    //для фильтра и сортировки списка
    typesAfterFilterAndSortEmitter = new Subject<BookType[]>();

    //для валидации форм
    isRepeatsInSubtypeNamesArrayEmitter = new Subject<boolean>();
    isExistNameInDBEmitter = new Subject<boolean>();

    //для удаления
    typesToDelete: BookType[] = [];
    typeToDeleteSubscription = new Subscription();

    //для изменения типа
    typeToChangeEmitter = new Subject<BookType>();
    typeToChange: BookType = new BookType();
    oldType: BookType = new BookType();
    currentChangeTypeFormValues: any;

    //для изменения списка подтипов
    deletedSubtypes: BookSubType[] = [];
    changedSubtypes: BookSubType[] = [];
    newSubtypes: BookSubType[] = [];
    oldSubtypeArray: BookSubType[] = [];


//TODO сделать touched На валидацию поля имя вначале


    constructor(
        private crudServ: CrudService,
    ){}

    filterArrayTransfer(arrayFiltered: BookType[]) {
        this.typesAfterFilterAndSortEmitter.next(arrayFiltered);
    }

    getAllTypeList() {
        this.crudServ.getAllDAO<BookType>('type/getAll')

        //FIXME избавиться от any в index signature!!!
        //FIXME постараться обобщить пайп для всех методов!!! ПРОВАЛЕНО
        // 1) сделать интерфейс, в котором есть метод заполняющий поля,
        // 2) каждая модель наследует этот интерфейс
        // 3) это наследование прописывается в generic метода pipeDAO
        // 4) метод заполнения полей вызывается в pipeDAO, экземпляр вводится через аргументы
            .pipe(map((data: { [key: string]: any}) => {
                let classArray = [];
                for(let key in data) {
                    let argArray: string[] = [];
                    for(let key2 in data[key]) {
                        argArray.push(data[key][key2]);
                    }
                    classArray.push(new BookType(...argArray));
                    argArray = [];
                }
                return classArray;
            }))
            .subscribe(
                data => {
                    this.typeListEmitter.next(data);
                    this.typesAfterFilterAndSortEmitter.next(data);
                }

            );
    }

    checkName(name: string){
        this.crudServ.checkName('type/checkName?name=' + name)
            .subscribe((data: { [key: string]: any}) => {
                let oldTypeName = "";
                let marker: number = 0;
                for(let key in data) {
                    marker++;
                    if(marker == 1){
                        oldTypeName = data[key].name;
                    }
                }
                if(marker > 0){
                    if((marker == 1) && (oldTypeName == this.oldType.name)) {
                        this.isExistNameInDBEmitter.next(false);
                    }else{
                        this.isExistNameInDBEmitter.next(true);
                    }
                }else{
                   this.isExistNameInDBEmitter.next(false);
                }
            });
    }

    deleteTypes() {
        let url = "type/deleteList";
        this.crudServ.deleteTypeList<BookType>(url, this.typesToDelete)
            .subscribe((data) => {
                console.log(data);
            });
    }

    changeType(stArray: BookSubType[]) {
        //удалить из базы удалённые подтипы
        if(this.deletedSubtypes.length > 0){
            this.crudServ.deleteSubTypeList<BookSubType>('subtype/deleteList', this.deletedSubtypes)
                .subscribe((data: any) => {
                }
            );
        }
        //составление массива подтипров для записи/изменеия
        console.log("Перед отправкой");
        console.log(this.typeToChange);
        //изменение
        this.crudServ.changeType('type/updateType', this.typeToChange).subscribe((data) => {
            console.log(data);
        })

    }

}
