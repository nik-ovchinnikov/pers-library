import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemSubmitComponent } from './delete-item-submit.component';

describe('DeleteItemSubmitComponent', () => {
  let component: DeleteItemSubmitComponent;
  let fixture: ComponentFixture<DeleteItemSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteItemSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
