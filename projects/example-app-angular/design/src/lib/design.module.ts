import { NgModule } from '@angular/core';

import { AtomModule } from './atom/atom.module';
import { MoleculeModule } from './molecule/molecule.module';
import { OrganismModule } from './organism/organism.module';
import { TokenModule } from './token/token.module';

@NgModule({
  declarations: [],
  imports: [
    TokenModule,
    AtomModule,
    MoleculeModule,
    OrganismModule,
  ],
  exports: [
    TokenModule,
    AtomModule,
    MoleculeModule,
    OrganismModule,
  ]
})
export class DesignModule { }
