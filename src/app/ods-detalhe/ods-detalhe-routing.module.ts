import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdsDetalhePage } from './ods-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: OdsDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdsDetalhePageRoutingModule {}
