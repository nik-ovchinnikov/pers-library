import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseItemChangeComponent } from './choose-item-change.component';

describe('ChooseItemChangeComponent', () => {
  let component: ChooseItemChangeComponent;
  let fixture: ComponentFixture<ChooseItemChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseItemChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseItemChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
