import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarListaItensComponent } from './adicionar-lista-itens.component';
import {AuthGuard} from '../guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: AdicionarListaItensComponent,
    data: {
      title: 'Adicionar Item'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarListaItensRoutingModule {}
