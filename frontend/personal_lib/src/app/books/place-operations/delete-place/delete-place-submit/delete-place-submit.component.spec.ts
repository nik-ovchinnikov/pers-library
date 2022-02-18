import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlaceSubmitComponent } from './delete-place-submit.component';

describe('DeletePlaceSubmitComponent', () => {
  let component: DeletePlaceSubmitComponent;
  let fixture: ComponentFixture<DeletePlaceSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePlaceSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlaceSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
