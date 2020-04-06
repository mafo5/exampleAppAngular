import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

import { iconMap } from '../../../assets/atom/icon';

@Component({
  selector: 'design-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnChanges {

  private iconMap: {
    [key: string]: string;
  };

  @Input() name!: string;
  @Input() size!: number;

  content = '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>';

  defaultAttr = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  };

  constructor(
    private elem: ElementRef,
    private changeDetector: ChangeDetectorRef,
  ) {
    this.iconMap = iconMap;
  }

  ngOnChanges(changes: SimpleChanges) {
    const size = changes.size.currentValue || 24;
    const svg = this.iconMap[ this.uppercamelcase(changes.name.currentValue) ] || '';

    if (!svg) {
      console.warn(
        `Icon not found: ${changes.name.currentValue}\n` +
        `Refer to documentation on https://github.com/michaelbazos/angular-feather`
      );
    }

    this.elem.nativeElement.innerHTML = svg
      .replace('width="24"', `width="${size}"`)
      .replace('height="24"', `height="${size}"`);
    this.changeDetector.markForCheck();
  }

  private uppercamelcase(value) {
    return value;
  }

}
