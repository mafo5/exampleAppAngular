import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as __ from 'hamjest';

import { TextareaComponent } from './textarea.component';
import { FormsModule } from '@angular/forms';

xdescribe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextareaComponent
      ],
      imports: [
        FormsModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    __.assertThat(component, __.is(__.truthy()));
  });

  it('should display nothing', () => {

    __.assertThat(compiled, __.hasProperty('innerText', __.is('')));
  });

  it('should display given placeholder', () => {
    component.placeholder = 'test placeholder';

    fixture.detectChanges();

    __.assertThat(compiled, __.hasProperty('innerHTML', __.containsString('placeholder="test placeholder"')));
  });

  it('should display given value', async () => {
    component.value = 'test value';

    fixture.detectChanges();
    return fixture.whenStable().then(() => {

      __.assertThat(compiled, __.hasProperty('value', __.is('test value')));
    });
  });

  it('should trigger changed value', () => {
    const resultList = [];
    // component.valueChange.subscribe((result) => resultList.push(result));
    const textarea: HTMLTextAreaElement = compiled.querySelector('textarea');

    textarea.value = 'changed value';
    textarea.dispatchEvent(new Event('change'));

    fixture.detectChanges();
    return fixture.whenStable().then(() => {

      __.assertThat(resultList, __.contains('changed value'));
    });
  });
});
