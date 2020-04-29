import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as __ from 'hamjest';

import { ListComponent } from './list.component';

@Component({
  template: '<app-list [list]="list"></app-list>'
})
class TestNoTemplateWrapperComponent {
  list: any[];
}

@Component({
  template: `
  <app-list [list]="list" [template]="entry">
    <ng-template #entry let-item>CONTENT VALUE {{item}}</ng-template>
  </app-list>
  `
})
class TestTemplateWrapperComponent {
  list: any[];
}

xdescribe('ListComponent', () => {

  beforeEach(async(() => {
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

    beforeEach(async(() => {
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

    beforeEach(async(() => {
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
