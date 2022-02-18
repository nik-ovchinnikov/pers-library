
import { CommonPrototype } from "./common-prototype.interface";

//TODO заменить public на Private
export class BookSubPlace implements CommonPrototype{
  constructor(
    public name: string = "",
    public description: string = "",
    public creationDate: Date = new Date(),
    public lastChangeDate: Date = new Date(),
    public bookPlaceName: string = "",
    public id: number = -1,
  ) {
  }
}
