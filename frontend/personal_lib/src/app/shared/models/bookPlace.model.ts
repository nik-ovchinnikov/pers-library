import { BookSubPlace } from "./bookSubPlace.model";

export class BookPlace {
  constructor(
    public name: string = "",
    public description: string = "",
    public bookSubPlaceList: BookSubPlace[] = [],
    public creationDate: Date = new Date(),
    public lastChangeDate: Date = new Date(),
    public id: number = -1,
  ) {

  }
  public subplacesToString(): string {
    let resultString: string = "";
    for(let bookSubPlace of this.bookSubPlaceList) {
      resultString = resultString + " " + bookSubPlace.name;
    }
    return resultString;
  }
}
