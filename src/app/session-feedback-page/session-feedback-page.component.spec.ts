import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFeedbackPageComponent } from './session-feedback-page.component';

describe('SessionFeedbackPageComponent', () => {
  let component: SessionFeedbackPageComponent;
  let fixture: ComponentFixture<SessionFeedbackPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionFeedbackPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFeedbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
