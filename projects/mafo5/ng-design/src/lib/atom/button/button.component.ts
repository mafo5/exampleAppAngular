import { Component, Input } from '@angular/core';

@Component({
  selector: 'mafo5-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type = 'button';

}
