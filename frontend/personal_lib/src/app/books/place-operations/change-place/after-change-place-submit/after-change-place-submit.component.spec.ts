import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterChangePlaceSubmitComponent } from './after-change-place-submit.component';

describe('AfterChangePlaceSubmitComponent', () => {
  let component: AfterChangePlaceSubmitComponent;
  let fixture: ComponentFixture<AfterChangePlaceSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterChangePlaceSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterChangePlaceSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
