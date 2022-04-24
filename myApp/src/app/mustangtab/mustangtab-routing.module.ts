import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MustangTabPage } from './mustangtab.page';

const routes: Routes = [
  {
    path: '',
    component: MustangTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MustangTabPageRoutingModule {}
