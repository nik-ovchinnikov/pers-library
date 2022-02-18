import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CommonLibService {

    // определяет есть ли в массиве повторения
    arrayRepeatElements(array: string[]): boolean {
        let result: boolean = false;
        let matches = []
        matches.push(array.map(name => {
        if (name != "") {
            return array.filter(elem => elem == name).length
        }else { return -1}
        }));

        matches[0].forEach(elem => {
            // Это условие для случая повторяющихся имён
            if (elem > 1) {
                result = true;
            }
        });
        return result;
    }

}