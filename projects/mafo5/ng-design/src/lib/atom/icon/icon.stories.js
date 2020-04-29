import { storiesOf, moduleMetadata } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { iconMap } from '../../../assets/atom/icon';

storiesOf('Atom/Icon', module)
  .addDecorator(
      moduleMetadata({
          declarations: [IconComponent]
      })
  )
  .add('all', () => ({
    template: `
      <ng-container *ngFor="let icon of iconMap">
        <div style="display: inline-block; padding: 10px;"><design-icon [name]="icon"></design-icon> {{icon}}</div>
      </ng-container>
    `,
    props: {
      iconMap: Object.keys(iconMap),
    }
  }))
  .add('with size', () => ({
    template: `
      <ng-container *ngFor="let icon of iconMap">
        <div style="display: inline-block; padding: 10px;"><design-icon [name]="icon" size="40"></design-icon> {{icon}}</div>
      </ng-container>
    `,
    props: {
      iconMap: Object.keys(iconMap),
    }
  }))
