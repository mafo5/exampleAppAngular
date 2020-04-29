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
      <design-button>Normal</design-button>
      <design-button class="primary">Primary</design-button>
      <design-button class="secondary">Secondary</design-button>
    `,
  }))
  .add('short', () => ({
    template: `
      <design-button class="short">Normal</design-button>
      <design-button class="primary short">Primary</design-button>
      <design-button class="secondary short">Secondary</design-button>
    `,
  }))
