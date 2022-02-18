import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlaceDeleteComponent } from './choose-place-delete.component';

describe('ChoosePlaceDeleteComponent', () => {
  let component: ChoosePlaceDeleteComponent;
  let fixture: ComponentFixture<ChoosePlaceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePlaceDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePlaceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
