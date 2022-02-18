import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTypeDeleteComponent } from './choose-type-delete.component';

describe('ChooseTypeDeleteComponent', () => {
  let component: ChooseTypeDeleteComponent;
  let fixture: ComponentFixture<ChooseTypeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTypeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
