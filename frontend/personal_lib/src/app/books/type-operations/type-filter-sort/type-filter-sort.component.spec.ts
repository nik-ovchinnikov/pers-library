import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFilterSortComponent } from './type-filter-sort.component';

describe('TypeFilterSortComponent', () => {
  let component: TypeFilterSortComponent;
  let fixture: ComponentFixture<TypeFilterSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeFilterSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeFilterSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
