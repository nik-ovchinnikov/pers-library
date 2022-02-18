import { BookPicture } from "./bookPicture.model";
import { BookPlace } from "./bookPlace.model";
import { BookSubPlace } from "./bookSubPlace.model";
import { BookSubType } from "./bookSubType.model";
import { BookType } from "./bookType.model";
import { CommonPrototype } from "./common-prototype.interface";
import { ItemPrototype } from "./itemPrototype.interface";

export class Book implements CommonPrototype, ItemPrototype {
  constructor(
    public name: string = '',
    public description: string = '',
    public key: string = '',
    public bookType: BookType = new BookType(),
    public bookSubType: BookSubType = new BookSubType(),
    public bookPlace: BookPlace = new BookPlace(),
    public bookSubPlace: BookSubPlace = new BookSubPlace(),
    public bookPictureList: BookPicture[] = [],
    public creationDate: Date = new Date(),
    public lastChangeDate: Date = new Date(),
    public id: number = -1,
  ) {

  }
}