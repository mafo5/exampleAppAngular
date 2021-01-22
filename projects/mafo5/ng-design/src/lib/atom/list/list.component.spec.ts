import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import * as __ from 'hamjest';

import { ListComponent } from './list.component';

@Component({
  template: '<mafo5-list [list]="list"></mafo5-list>'
})
class TestNoTemplateWrapperComponent {
  list: any[];
}

@Component({
  template: `
  <mafo5-list [list]="list" [template]="entry">
    <ng-template #entry let-item>CONTENT VALUE {{item}}</ng-template>
  </mafo5-list>
  `
})
class TestTemplateWrapperComponent {
  list: any[];
}

xdescribe('ListComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        TestNoTemplateWrapperComponent,
        TestTemplateWrapperComponent,
      ]
    })
    .compileComponents();
  }));

  describe('without a content template', () => {
    let component: TestNoTemplateWrapperComponent;
    let fixture: ComponentFixture<TestNoTemplateWrapperComponent>;
    let compiled: HTMLElement;

    beforeEach(waitForAsync(() => {
      fixture = TestBed.createComponent(TestNoTemplateWrapperComponent);
      component = fixture.componentInstance;
      compiled = fixture.nativeElement;
      fixture.detectChanges();
    }));

    describe('without list value', () => {
      it('should display nothing', () => {

        __.assertThat(compiled, __.hasProperty('innerText', __.is('')));
      });
    });

    describe('with list value', () => {
      beforeEach(() => {
        component.list = [
          'valueA', 'valueB'
        ];
        fixture.detectChanges();
      });

      it('should display list elements', () => {

        __.assertThat(compiled, __.hasProperty('innerText', __.allOf(
          __.containsString('valueA'),
          __.containsString('valueB'),
        )));
      });
    });
  });

  describe('with a content template', () => {
    let component: TestTemplateWrapperComponent;
    let fixture: ComponentFixture<TestTemplateWrapperComponent>;
    let compiled: HTMLElement;

    beforeEach(waitForAsync(() => {
      fixture = TestBed.createComponent(TestTemplateWrapperComponent);
      component = fixture.componentInstance;
      compiled = fixture.nativeElement;
      fixture.detectChanges();
    }));

    describe('without list value', () => {
      it('should display nothing', () => {

        __.assertThat(compiled, __.hasProperty('innerText', __.is('')));
      });
    });

    describe('with list value', () => {
      beforeEach(() => {
        component.list = [
          'valueA', 'valueB'
        ];
        fixture.detectChanges();
      });

      it('should display list elements', () => {

        __.assertThat(compiled, __.hasProperty('innerText', __.allOf(
          __.containsString('CONTENT VALUE valueA'),
          __.containsString('CONTENT VALUE valueB'),
        )));
      });
    });
  });
});
