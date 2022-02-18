import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOperationsComponent } from './place-operations.component';

describe('PlaceOperationsComponent', () => {
  let component: PlaceOperationsComponent;
  let fixture: ComponentFixture<PlaceOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
