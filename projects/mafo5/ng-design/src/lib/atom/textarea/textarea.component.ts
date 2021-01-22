import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

const DEFAULT_EMPTY = '';

@Component({
  selector: 'mafo5-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements ControlValueAccessor {

  @Input() placeholder: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename,@typescript-eslint/naming-convention,no-underscore-dangle
  @Input('value') _value = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename,@typescript-eslint/naming-convention,no-underscore-dangle
  @Input('disabled') disabled = false;

  get value() {
    // eslint-disable-next-line no-underscore-dangle
    return this._value;
  }

  set value(val) {
    // eslint-disable-next-line no-underscore-dangle
    this._value = val || DEFAULT_EMPTY;
    this.propagateChange(val);
  }

  writeValue(value: string): void {
    // eslint-disable-next-line no-underscore-dangle
    this._value = value || DEFAULT_EMPTY;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private propagateChange: (value?) => string = () => undefined;
}
