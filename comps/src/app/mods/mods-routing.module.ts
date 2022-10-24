import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsComponentComponent } from './mods-component/mods-component.component';

const routes: Routes = [{
  path: '', component: ModsComponentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
