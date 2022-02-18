import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlaceChangeComponent } from './choose-place-change.component';

describe('ChoosePlaceChangeComponent', () => {
  let component: ChoosePlaceChangeComponent;
  let fixture: ComponentFixture<ChoosePlaceChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePlaceChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePlaceChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
