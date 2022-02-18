import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChangeFormComponent } from './item-change-form.component';

describe('ItemChangeFormComponent', () => {
  let component: ItemChangeFormComponent;
  let fixture: ComponentFixture<ItemChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
