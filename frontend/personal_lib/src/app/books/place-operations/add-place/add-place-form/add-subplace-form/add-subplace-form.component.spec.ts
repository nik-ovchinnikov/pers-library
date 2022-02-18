import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubplaceFormComponent } from './add-subplace-form.component';

describe('AddSubplaceFormComponent', () => {
  let component: AddSubplaceFormComponent;
  let fixture: ComponentFixture<AddSubplaceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubplaceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubplaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
