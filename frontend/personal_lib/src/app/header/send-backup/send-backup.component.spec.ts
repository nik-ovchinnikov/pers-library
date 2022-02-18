import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendBackupComponent } from './send-backup.component';

describe('SendBackupComponent', () => {
  let component: SendBackupComponent;
  let fixture: ComponentFixture<SendBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendBackupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
