import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTypeChangeComponent } from './choose-type-change.component';

describe('ChooseTypeChangeComponent', () => {
  let component: ChooseTypeChangeComponent;
  let fixture: ComponentFixture<ChooseTypeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTypeChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTypeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
