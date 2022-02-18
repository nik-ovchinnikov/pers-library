import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddSubmitComponent } from './item-add-submit.component';

describe('ItemAddSubmitComponent', () => {
  let component: ItemAddSubmitComponent;
  let fixture: ComponentFixture<ItemAddSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAddSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
