import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ListComponent } from './list.component';

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

storiesOf('Atom/List', module)
  .addDecorator(
      moduleMetadata({
          declarations: [ListComponent],
      })
  )
  .add('simple', () => ({
    template: `
      <design-list [list]="[1,2,3,4,5]"></design-list>
    `,
    }))
  .add('horizontal', () => ({
    template: `
      <design-list horizontal [list]="[1,2,3,4,5]"></design-list>
    `,
    }))
  .add('horizontal Stack', () => ({
    template: `
      <design-list horizontalStack [list]="[1,2,3,4,5]"></design-list>
    `,
    }))
  .add('with template', () => ({
    template: `
      <design-list [list]="[1,2,3,4,5]" [template]="entry"><ng-template #entry let-item><div class="test__block">{{item|json}}</div></ng-template></design-list>
    `,
    styles,
  }))
  .add('horizontal with template', () => ({
    template: `
      <design-list horizontal [list]="[1,2,3,4,5]" [template]="entry"><ng-template #entry let-item><div class="test__block">{{item|json}}</div></ng-template></design-list>
    `,
    styles,
  }))
  .add('horizontal Stack with template', () => ({
    template: `
      <div class="area area--fixed">
        <design-list horizontalStack [list]="list" [template]="entry"><ng-template #entry let-item let-index><div class="test__block" [style.height]="item">{{index|json}}</div></ng-template></design-list>
      </div>
    `,
    styles,
    props: {
      list: new Array(10).fill().map(() => (Math.random()*100 + 50).toFixed()+'px')
    }
  }))
