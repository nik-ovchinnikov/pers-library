import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubtypeFormComponent } from './add-subtype-form.component';

describe('AddSubtypeFormComponent', () => {
  let component: AddSubtypeFormComponent;
  let fixture: ComponentFixture<AddSubtypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubtypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubtypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
