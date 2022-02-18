import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeChangeFormComponent } from './type-change-form.component';

describe('TypeChangeFormComponent', () => {
  let component: TypeChangeFormComponent;
  let fixture: ComponentFixture<TypeChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
