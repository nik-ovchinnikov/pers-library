import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAddSubmitComponent } from './type-add-submit.component';

describe('TypeAddSubmitComponent', () => {
  let component: TypeAddSubmitComponent;
  let fixture: ComponentFixture<TypeAddSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAddSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAddSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
