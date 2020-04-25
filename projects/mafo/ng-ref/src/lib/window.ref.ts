import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class WindowRef {

  /**
   * Will give you an observable of the value of the given property on the window object.
   *
   * This is especially useful
   * if you don't know when a global property will be available
   * or you run into timing issues.
   *
   * @param name of the property to observe
   * @returns observable of the value
   */
  getGlobalObject(name: string): Observable<any> {
    const windowObject = this.getWindow();
    const value = windowObject[name];
    const output = new BehaviorSubject<any>(value);
    Object.defineProperty(windowObject, name, {
        set: (settedValue) => {
            output.next(settedValue);
        }
    });
    return output;
  }

  getWindow(): Window {
    return window;
  }
}
