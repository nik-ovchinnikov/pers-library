import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterItemChangeSubmitComponent } from './after-item-change-submit.component';

describe('AfterItemChangeSubmitComponent', () => {
  let component: AfterItemChangeSubmitComponent;
  let fixture: ComponentFixture<AfterItemChangeSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterItemChangeSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterItemChangeSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
