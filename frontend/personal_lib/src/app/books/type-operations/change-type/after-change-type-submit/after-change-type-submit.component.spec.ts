import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterChangeTypeSubmitComponent } from './after-change-type-submit.component';

describe('AfterChangeTypeSubmitComponent', () => {
  let component: AfterChangeTypeSubmitComponent;
  let fixture: ComponentFixture<AfterChangeTypeSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterChangeTypeSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterChangeTypeSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
