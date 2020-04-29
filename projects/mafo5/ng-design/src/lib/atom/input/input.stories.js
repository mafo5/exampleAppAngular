import { storiesOf, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';

storiesOf('Atom/Input', module)
  .addDecorator(
      moduleMetadata({
          declarations: [InputComponent]
      })
  )
  .add('simple', () => ({
    template: `
      <design-input></design-input>
      <design-input placeholder="with Placeholder"></design-input>
      <design-input value="with Value"></design-input>
      <design-input type="password" placeholder="as Password field"></design-input>
      `,
    }))
  .add('with label', () => ({
    template: `
      <div>
        <label for="myInput">
          Label
        </label>
        <design-input inputName="myInput" placeholder="click on label to focus input"></design-input>
      </div>
    `,
  }))
