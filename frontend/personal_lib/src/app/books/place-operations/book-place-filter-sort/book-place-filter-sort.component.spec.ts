import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPlaceFilterSortComponent } from './book-place-filter-sort.component';

describe('BookPlaceFilterSortComponent', () => {
  let component: BookPlaceFilterSortComponent;
  let fixture: ComponentFixture<BookPlaceFilterSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPlaceFilterSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPlaceFilterSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
