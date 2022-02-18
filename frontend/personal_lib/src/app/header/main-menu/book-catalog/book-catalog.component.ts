import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {

  showBookCatalog = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onBooksClicked() {
    this.showBookCatalog = !this.showBookCatalog;
  }

}
