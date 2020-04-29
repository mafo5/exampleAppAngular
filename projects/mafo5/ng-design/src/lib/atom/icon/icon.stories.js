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
        <div style="display: inline-block; padding: 10px;"><mafo5-icon [name]="icon"></mafo5-icon> {{icon}}</div>
      </ng-container>
    `,
    props: {
      iconMap: Object.keys(iconMap),
    }
  }))
  .add('with size', () => ({
    template: `
      <ng-container *ngFor="let icon of iconMap">
        <div style="display: inline-block; padding: 10px;"><mafo5-icon [name]="icon" size="40"></mafo5-icon> {{icon}}</div>
      </ng-container>
    `,
    props: {
      iconMap: Object.keys(iconMap),
    }
  }))
