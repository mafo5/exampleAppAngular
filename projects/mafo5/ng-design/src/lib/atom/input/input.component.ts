import { Component, Input } from '@angular/core';

@Component({
  selector: 'mafo5-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() placeholder: string;
  @Input() type = 'text';
  @Input() inputName: string;
  @Input() value: any = '';

}
