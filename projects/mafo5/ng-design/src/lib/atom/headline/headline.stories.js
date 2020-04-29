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
      <mafo5-headline>Some Headline</mafo5-headline>
      `,
    }))
