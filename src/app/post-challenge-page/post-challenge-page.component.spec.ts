import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent, InputComponent, LabelComponent, TextareaComponent } from '@mafo5/ng-design';

import { PageComponent } from '../page/page.component';
import { PostChallengePageComponent } from './post-challenge-page.component';

@Component({
  selector: 'app-page',
  template: 'TEST_PAGE <ng-content></ng-content>'
})
class TestPageComponent extends PageComponent {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mafo5-label',
  template: 'TEST_LABEL <ng-content></ng-content>'
})
class TestLabelComponent extends LabelComponent {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mafo5-input',
  template: 'TEST_INPUT <ng-content></ng-content>'
})
class TestInputComponent extends InputComponent {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mafo5-textarea',
  template: 'TEST_TEXTAREA <ng-content></ng-content>'
})
class TestTextareaComponent extends TextareaComponent {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mafo5-button',
  template: 'TEST_BUTTON <ng-content></ng-content>'
})
class TestButtonComponent extends ButtonComponent {}

describe('PostChallengePageComponent', () => {
  let component: PostChallengePageComponent;
  let fixture: ComponentFixture<PostChallengePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostChallengePageComponent,
        TestPageComponent,
        TestLabelComponent,
        TestInputComponent,
        TestTextareaComponent,
        TestButtonComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostChallengePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
