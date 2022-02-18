import { CommonPrototype } from "./common-prototype.interface";
import { BookSubType } from "./bookSubType.model";

//TODO заменить public на Private
//TODO надо чтобы дата уходила с точностью до секунд
export class BookType implements CommonPrototype{
  constructor(
    public name: string = "",
    public description: string = "",
    public bookSubTypeList: BookSubType[] = [],
    public creationDate: Date = new Date(),
    public lastChangeDate: Date = new Date(),
    public id: number = -1,
  ) {

  }
  public subtypesToString(): string {
    let resultString: string = "";
    for(let bookSubtype of this.bookSubTypeList) {
      resultString = resultString + " " + bookSubtype.name;
    }
    return resultString;
  }

  // public formatDate(date: Date){
  //   return date.toISOString().slice(0, 10);
  // }

}
