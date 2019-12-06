import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  entryComponents: [],
  declarations: [
  ]
})
export class MaterialComponentsModule {}
