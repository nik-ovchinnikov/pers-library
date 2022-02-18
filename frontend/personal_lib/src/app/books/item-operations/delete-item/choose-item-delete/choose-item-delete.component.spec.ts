import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseItemDeleteComponent } from './choose-item-delete.component';

describe('ChooseItemDeleteComponent', () => {
  let component: ChooseItemDeleteComponent;
  let fixture: ComponentFixture<ChooseItemDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseItemDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseItemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
