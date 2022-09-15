import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdsDetalhePageRoutingModule } from './ods-detalhe-routing.module';

import { OdsDetalhePage } from './ods-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdsDetalhePageRoutingModule
  ],
  declarations: [OdsDetalhePage]
})
export class OdsDetalhePageModule {}
