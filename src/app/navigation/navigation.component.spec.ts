import { Component, Input } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import * as __ from 'hamjest';

import { NavigationComponent } from './navigation.component';

@Component({
  template: 'TEST CONTENT'
})
class TestComponent {}

@Component({
  template: '<app-navigation></app-navigation><router-outlet></router-outlet>'
})
class TestWrapperComponent {}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-icon',
  template: 'TEST_ICON {{name | json}} '
})
class TestIconComponent {
  @Input() name: any;
  @Input() size: any;
}

describe('NavigationComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        NavigationComponent,
        TestComponent,
        TestWrapperComponent,
        TestIconComponent,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {
          routeConfig: {
            children: [
              { path: 'withoutIcon', component: TestComponent, data: { label: 'Without Icon' } },
              { path: 'onlyIcon', component: TestComponent, data: { icon: 'only' } },
              { path: 'full', component: TestComponent, data: { icon: 'full', label: 'With Icon and Label' } },
            ]
          }
        }}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should display child navigation', () => {
    const nodeList = Array.from(compiled.querySelectorAll('li'));

    __.assertThat(nodeList, __.contains(
      __.allOf(
        __.hasProperty('innerText', __.is('Without Icon')),
        __.hasProperty('outerHTML', __.containsString('router-link="/,withoutIcon"'))
      ),
      __.allOf(
        __.hasProperty('innerText', __.is('TEST_ICON "only"')),
        __.hasProperty('outerHTML', __.containsString('router-link="/,onlyIcon"'))
      ),
      __.allOf(
        __.hasProperty('innerText', __.allOf(
          __.containsString('TEST_ICON "full"'),
          __.containsString('With Icon and Label'),
        )),
        __.hasProperty('outerHTML', __.containsString('router-link="/,full"'))
      ),
    ));
  });
});
