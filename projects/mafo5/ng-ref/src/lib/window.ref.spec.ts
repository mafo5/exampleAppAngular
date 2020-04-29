import { TestBed } from '@angular/core/testing';
import * as __ from 'hamjest';
import { Observable } from 'rxjs';

import { WindowRef } from './window.ref';

describe('Window', () => {

  let sut: WindowRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WindowRef,
      ]
    });
    sut = TestBed.inject(WindowRef);
  });

  it('should be created', () => {

    __.assertThat(sut, __.is(__.truthy()));
  });

  describe('getWindow', () => {
    it('should be a function', () => {

      __.assertThat(sut, __.hasProperty('getWindow', __.is(__.func())));
    });

    describe('return value', () => {
      it('should be the global window object', () => {

        const result = sut.getWindow();

        __.assertThat(result, __.is(__.strictlyEqualTo(window)));
      });
    });
  });

  describe('getGlobalObject', () => {
    it('should be a function', () => {

      __.assertThat(sut, __.hasProperty('getGlobalObject', __.is(__.func())));
    });

    describe('return value', () => {
      beforeEach(() => {
        // tslint:disable-next-line: no-string-literal
        delete window['testproperty'];
      });
      it('should be an observable', () => {

        const result = sut.getGlobalObject('testproperty');

        __.assertThat(result, __.is(__.instanceOf(Observable)));
      });

      describe('when property does not exist', () => {
        it('should not resolve', () => {
          const resultList = [];
          sut.getGlobalObject('testproperty').subscribe((result) => resultList.push(result));

          __.assertThat(resultList, __.hasSize(0));
        });

        it('should resolve when property is set', () => {
          const resultList = [];
          sut.getGlobalObject('testproperty').subscribe((result) => resultList.push(result));

          // tslint:disable-next-line: no-string-literal
          window['testproperty'] = 'something';

          __.assertThat(resultList, __.contains('something'));
        });
      });

      describe('when property does exist', () => {
        it('should resolve with existing value', () => {
          // tslint:disable-next-line: no-string-literal
          window['testproperty'] = 'preexsisting value';

          const resultList = [];
          sut.getGlobalObject('testproperty').subscribe((result) => resultList.push(result));

          __.assertThat(resultList, __.contains('preexsisting value'));
        });

        it('should resolve when property is set', () => {
          const resultList = [];
          sut.getGlobalObject('testproperty').subscribe((result) => resultList.push(result));

          // tslint:disable-next-line: no-string-literal
          window['testproperty'] = 'something';

          __.assertThat(resultList, __.contains('something'));
        });
      });
    });
  });
});
