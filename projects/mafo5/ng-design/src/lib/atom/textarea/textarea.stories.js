import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

const styles = [`
.test__block {
  width:100px;
  height:50px;
  background:lightgray;
  border-radius:5px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 0 10px 10px 0;
}
.test__block--higher {
  height:100px;
}
.test__block--highest {
  height:200px;
}
.area--fixed {
  max-height: 200px;
  max-width: 400px;
  overflow: hidden auto;
}
`];

storiesOf('Atom/Textarea', module)
  .addDecorator(
      moduleMetadata({
          declarations: [TextareaComponent],
      })
  )
  .add('simple', () => ({
    template: `
      <design-textarea></design-textarea>
      <design-textarea placeholder="with a placeholder"></design-textarea>
      <design-textarea value="with a predefined value"></design-textarea>
    `,
    }))
