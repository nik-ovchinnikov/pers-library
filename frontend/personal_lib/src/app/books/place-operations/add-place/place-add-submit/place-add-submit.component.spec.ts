import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAddSubmitComponent } from './place-add-submit.component';

describe('PlaceAddSubmitComponent', () => {
  let component: PlaceAddSubmitComponent;
  let fixture: ComponentFixture<PlaceAddSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceAddSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAddSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
