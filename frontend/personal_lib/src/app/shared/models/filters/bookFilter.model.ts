export class BookFilter{
  constructor(
    public byName: string = '',
    public byWordsInDescription: string = '',
    public key: string = '',
    public fromCreationDate: Date = new Date(1970,1,1),
    public fromLastChange: Date = new Date(1970,1,1),
    public sortType: string = 'changeDateDESC',
    public tillCreationDate: Date = new Date(6970,1,1),
    public tillLastChange: Date = new Date(6970,1,1),
    public type: string = '',
    public subtype: string = '',
    public place: string = '',
    public subPlace: string = '',
  ) {}

}