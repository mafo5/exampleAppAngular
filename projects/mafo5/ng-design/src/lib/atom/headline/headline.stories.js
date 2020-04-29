import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HeadlineComponent } from './headline.component';

storiesOf('Atom/Headline', module)
  .addDecorator(
      moduleMetadata({
          declarations: [HeadlineComponent]
      })
  )
  .add('simple', () => ({
    template: `
      <design-headline>Some Headline</design-headline>
      `,
    }))
