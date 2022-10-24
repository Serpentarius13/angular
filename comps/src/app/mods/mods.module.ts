import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsComponentComponent } from './mods-component/mods-component.component';


@NgModule({
  declarations: [
    ModsComponentComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
