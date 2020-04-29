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
      <mafo5-label>Some Label</mafo5-label>
      `,
    }))
