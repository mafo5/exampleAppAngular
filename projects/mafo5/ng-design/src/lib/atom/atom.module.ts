import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    IconComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    IconComponent,
    FormsModule,
  ]
})
export class AtomModule { }
