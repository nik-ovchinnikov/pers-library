import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceChangeFormComponent } from './place-change-form.component';

describe('PlaceChangeFormComponent', () => {
  let component: PlaceChangeFormComponent;
  let fixture: ComponentFixture<PlaceChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
