import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

const DEFAULT_EMPTY = '';

@Component({
  selector: 'design-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements ControlValueAccessor {

  @Input() placeholder: string;
  // tslint:disable-next-line: no-input-rename variable-name
  @Input('value') _value = '';
  // tslint:disable-next-line: no-input-rename variable-name
  @Input('disabled') disabled = false;

  private propagateChange: (value?) => string = () => undefined;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val || DEFAULT_EMPTY;
    this.propagateChange(val);
  }

  writeValue(value: string): void {
    this._value = value || DEFAULT_EMPTY;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
