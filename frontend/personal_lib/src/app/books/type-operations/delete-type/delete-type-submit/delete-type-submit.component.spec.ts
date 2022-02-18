import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypeSubmitComponent } from './delete-type-submit.component';

describe('DeleteTypeSubmitComponent', () => {
  let component: DeleteTypeSubmitComponent;
  let fixture: ComponentFixture<DeleteTypeSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTypeSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTypeSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
