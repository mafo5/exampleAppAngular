import { storiesOf, moduleMetadata } from '@storybook/angular';
import { LabelComponent } from './label.component';

storiesOf('Atom/Label', module)
  .addDecorator(
      moduleMetadata({
          declarations: [LabelComponent]
      })
  )
  .add('simple', () => ({
    template: `
      <design-label>Some Label</design-label>
      `,
    }))
