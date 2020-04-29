import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { HeadlineComponent } from './headline/headline.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { ListComponent } from './list/list.component';
import { TextareaComponent } from './textarea/textarea.component';

const componentList = [
  ButtonComponent,
  HeadlineComponent,
  IconComponent,
  InputComponent,
  LabelComponent,
  ListComponent,
  TextareaComponent,
];

@NgModule({
  declarations: componentList,
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ...componentList,
  ]
})
export class AtomModule { }
