import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

storiesOf('Atom/Button', module)
  .addDecorator(
      moduleMetadata({
          declarations: [ButtonComponent]
      })
  )
  .add('colors', () => ({
    template: `
      <mafo5-button>Normal</mafo5-button>
      <mafo5-button class="primary">Primary</mafo5-button>
      <mafo5-button class="secondary">Secondary</mafo5-button>
    `,
  }))
  .add('short', () => ({
    template: `
      <mafo5-button class="short">Normal</mafo5-button>
      <mafo5-button class="primary short">Primary</mafo5-button>
      <mafo5-button class="secondary short">Secondary</mafo5-button>
    `,
  }))
