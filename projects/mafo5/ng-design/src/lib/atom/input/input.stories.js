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
      <mafo5-input></mafo5-input>
      <mafo5-input placeholder="with Placeholder"></mafo5-input>
      <mafo5-input value="with Value"></mafo5-input>
      <mafo5-input type="password" placeholder="as Password field"></mafo5-input>
      `,
    }))
  .add('with label', () => ({
    template: `
      <div>
        <label for="myInput">
          Label
        </label>
        <mafo5-input inputName="myInput" placeholder="click on label to focus input"></mafo5-input>
      </div>
    `,
  }))
